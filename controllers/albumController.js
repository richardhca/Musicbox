const path = require('path');
const pug = require('pug');
const beautify_html = require('js-beautify').html;
const trackDurationParser = require('../utilities/trackDurationParser.js');
const connection = require('typeorm').getConnection();

exports.album_page_get = async function (req, res, next) {
    const info = req.query.info;
    const type = req.query.type;
    const albums = await connection.getRepository('Albums')
        .find({owner_id: req.session.userId});
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        res.send({albums: albums});
    }
    else {
        console.log('server receive a empty req: /album');

        res.render('index',
            {page: 'album_page_get', albums: albums});
    }
};

exports.album_detail_get = async function (req, res, next) {
    const albumId = parseInt(req.params.id);

    if (isNaN(albumId)) {
        return res.status(404).send();
    }
    const album = await connection.getRepository('Albums').findOne(
        {id: albumId, owner_id: req.session.userId},
        {relations: ['tracks']},
    );
    if (album == null) {
        // HTTP status 404: NotFound
        return res.status(404).send();
    }
    // Sort tracks ASC by rank in album
    album.tracks.sort((a, b) => a.rank_in_album - b.rank_in_album);

    var track;
    for (track of album.tracks) {
        track.duration = trackDurationParser.durationParser(track.duration);
    }

    const info = req.query.info;
    const type = req.query.type;

    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        // console.log(html);
        res.send({album: album});
    }
    else {
        console.log('server receive a empty req: /album/detail');

        res.render('index',
            {page: 'album_detail_get', album: album});
    }


};

exports.album_delete = async function (req, res, next) {
    const albumId = parseInt(req.params.id);

    if (isNaN(albumId)) {
        return res.status(404).send('Delete failed.');
    }

    const albumsRepo = connection.getRepository('Albums');
    const album = await albumsRepo.findOne({id: albumId, owner_id: req.session.userId});

    if (!album) {
        return res.status(404).send('Delete failed.');
    }

    await albumsRepo.remove(album);

    res.send('Delete successful.');
};
