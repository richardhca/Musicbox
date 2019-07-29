const path = require('path');
const fs = require('fs');
const pug = require('pug');
const connection = require('typeorm').getConnection();
const albumUtilities = require('../utilities/albumUtilities');

exports.track_detail = (req, res, next) => {
    const info = req.query.info;
    const type = req.query.type;
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_track_detail_tool_bar = path.join(__dirname,
            '../views/track_tool_bar.pug');
        const fn_track_detail_tool_bar = pug.compileFile(
            p_track_detail_tool_bar, null);
        const p_track_detail = path.join(__dirname,
            '../views/track_detail.pug');
        const fn_track_detail = pug.compileFile(p_track_detail, null);

        const html = fn_track_detail_tool_bar() + fn_track_detail(
            {title: 'this is track page'});
        // console.log(html);

        res.send(html);
    } else {
        console.log('server receive a empty req');
        res.render('index',
            {page: 'track_detail', title: 'this is track page'});
    }
};

exports.track_detail_get = async (req, res, next) => {
    const id = parseInt(req.params.id);

    // If an id character can't be converted to an int, parseInt returns NaN.
    // Ex: 'abc'
    if (isNaN(id)) {
        return res.send({});
    }

    // Find track
    const track = await connection.getRepository('Tracks').findOne({id: id}, {relations: ['album_id']});

    // If no track found, return empty object
    res.send(track || {});
};

exports.track_delete = async (req, res, next) => {
    const id = parseInt(req.params.id);

    // If an id character can't be converted to an int, parseInt returns NaN.
    // Ex: 'abc'
    if (isNaN(id)) {
        return res.send({});
    }

    const tracksRepo = connection.getRepository('Tracks');
    const track = await tracksRepo.findOne(
        {id: id, owner_id: req.session.userId},
        {relations: ['album_id']},
    );

    if (track == null) {
        return res.status(404).send("404 Not Found!")
    }

    const album = track.album_id;
    const file_name = track.file_name;
    const cover_art_file_name = track.cover_art_file_name;

    console.log(file_name);
    console.log(cover_art_file_name);

    const path_track = './public/tracks/' + file_name;
    try {
        fs.unlinkSync(path_track);
        //file removed
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }

    if (cover_art_file_name) {
        const path_cover = './public/covers/' + cover_art_file_name;
        try {
            fs.unlinkSync(path_cover);
            //file removed
        } catch (err) {
            console.error(err);
            return res.status(500).send();
        }
    }

    await tracksRepo.remove(track);

    // Update album cover art
    albumUtilities.updateAlbumCover(album, cover_art_file_name);

    return res.send("Success");

};
