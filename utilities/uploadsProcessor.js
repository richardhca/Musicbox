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
        owner_id: uploader,
        genres: metadata.common.genre,
    };
    const tracksRepo = connection.getRepository("Tracks");
    return await tracksRepo.save(newTrackData).catch(error => {
        console.log(`Failed to save track. Error: ${error}`)
    });
};


/*
 Scenario 1: If album exists, add track to it and update relevant fields.
 Scenario 2: If album doesn't exist, create a new one.
 */
const processAlbum = async function (metadata, track, uploader) {

    // Fields that identify a unique album
    const albumTitle = metadata.common.album;
    const artist = track.artist_name;
    const uploaderId = uploader.id;

    // If uploaded track has an album field
    if (albumTitle) {
        const albumsRepo = connection.getRepository("Albums");

        // Find album and load its tracks
        const album = await albumsRepo
            .createQueryBuilder("album")
            .where("LOWER(album.title) = LOWER(:albumTitle)", {albumTitle})
            .andWhere("LOWER(album.artist_name) = LOWER(:artist)", {artist})
            .andWhere("album.owner_id = :uploaderId", {uploaderId})
            .leftJoinAndSelect("album.tracks", "tracks")
            .getOne();

        // If album exists, update it with new track
        if (album) {
            // Add track rank (1 + album's last track's rank)
            track.rank_in_album = album.tracks.slice(-1)[0].rank_in_album + 1;
            album.tracks.push(track);
            album.artists = Array.from(new Set(album.artists.concat(track.artists))); // Set to remove duplicates
            await albumsRepo.save(album);
        } else {
            // Set initial track rank
            track.rank_in_album = 1;
            // Create new album
            await albumsRepo.save({
                title: albumTitle,
                artist_name: track.artist_name,
                artists: track.artists,
                uploaded_on: track.uploaded_on,
                owner_id: uploaderId,
                tracks: [track]
            });
        }
    }
};

// Process uploaded track
const processUpload = async function (file, uploader) {
    // Extract metadata
    const metadata = await extractMetaData(file);

    // Save cover art
    await processCoverArt(metadata);

    // Process Track
    const track = await processTrack(metadata, uploader);

    // Process Album
    const album = await processAlbum(metadata, track, uploader);
};

// Process each upload and fetch current logged in user object
const processUploads = async function (req) {

    // Track(s) uploader
    const uploader = await connection.getRepository("Users").findOne({id: req.session.userId});

    for (var i = 0; i < req.files.length; i++) {
        await processUpload(req.files[i], uploader);
    }
};

module.exports = {
    processUploads: processUploads,
};
