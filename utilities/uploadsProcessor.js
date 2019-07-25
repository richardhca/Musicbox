const path = require('path');
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const connection = require('typeorm').getConnection();
const mm = require('music-metadata');
const {imageMimeTypeToExt} = require('../config/multerConfig');
const projectRoot = require('../config/projectRoot');


const extractMetaData = async function (file) {
    const metadata = await mm
        .parseFile(path.join(projectRoot.path, '/public/tracks/', `${file.filename}`), {native: true})
        .catch(err => {
            console.error(err.message);
        });
    metadata.common.fileName = file.filename;
    metadata.format.mimeType = file.mimetype;
    metadata.common.title = metadata.common.title || file.originalname; // TODO: Is this the correct way to handle missing names?
    return metadata;
};

const processCoverArt = async function (metadata) {
    if (metadata.common.picture && metadata.common.picture.length) {
        const cover = metadata.common.picture[0];
        metadata.common.coverArtFileName = `${uuidv4()}${imageMimeTypeToExt[cover.format]}`;
        await fs.writeFile(
            path.join(projectRoot.path, '/public/covers/', metadata.common.coverArtFileName),
            cover.data,
            function (err, result) {
                console.log(err);
            }
        );
    }
};

const processTrack = async function (metadata, uploader) {
    // TODO: Populate other fields
    const newTrackData = {
        title: metadata.common.title,
        year: metadata.common.year,
        artist_name: metadata.common.artist,
        artists: metadata.common.artists,
        duration: metadata.format.duration,
        mime_type: metadata.format.mimeType,
        uploaded_on: new Date(),
        file_name: metadata.common.fileName,
        cover_art_file_name: metadata.common.coverArtFileName,
        owner_id: uploader
    };
    const tracksRepo = connection.getRepository("Tracks");
    await tracksRepo.save(newTrackData).catch(error => {
        console.log(`Failed to save track. Error: ${error}`)
    });
};

const processArtist = function (metadata, track) {
    // TODO
};

const processAlbum = function (metadata, track, artist) {
    // TODO
};

// Process uploaded track
const processUpload = async function (file, uploaderId) {
    // Extract metadata
    const metadata = await extractMetaData(file);

    // Save cover art
    await processCoverArt(metadata);

    // Track uploader
    const uploader = await connection.getRepository("Users").findOne({id: uploaderId});

    // Process Track
    const track = await processTrack(metadata, uploader);

    // Process Artist
    const artist = await processArtist(metadata, track);

    // Process Album
    const album = await processAlbum(metadata, track, artist);
};

// Process each upload and fetch current logged in user object
const processUploads = async function (req) {
    for (var i = 0; i < req.files.length; i++) {
        processUpload(req.files[i], req.session.userId);
    }
};

module.exports = {
    processUploads: processUploads,
};
