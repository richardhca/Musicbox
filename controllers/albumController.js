const path = require('path');
const pug = require('pug');
const beautify_html = require('js-beautify').html;
const trackDurationParser = require('../utilities/trackDurationParser.js');
const connection = require('typeorm').getConnection();

exports.album_page_get = async function (req, res, next) {
    const info = req.query.info;
    const type = req.query.type;
    const albums = await connection.getRepository('Albums').find({owner_id: req.session.userId});
    console.log(albums);
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_album_page_tool_bar = path.join(__dirname,
            '../views/album_page_tool_bar.pug');
        const fn_album_page_tool_bar = pug.compileFile(
            p_album_page_tool_bar, null);

        const p_album_page = path.join(__dirname,
            '../views/album_page.pug');
        const fn_album_page = pug.compileFile(p_album_page, null);

        const html = fn_album_page_tool_bar() + fn_album_page({albums : albums});
        // console.log(html);
        res.send(html);
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
    console.log(album);

    const info = req.query.info;
    const type = req.query.type;

    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_album_detail_tool_bar = path.join(__dirname,
            '../views/album_detail_tool_bar.pug');
        const fn_album_detail_tool_bar = pug.compileFile(
            p_album_detail_tool_bar, null);

        const p_album_detail = path.join(__dirname,
            '../views/album_detail.pug');
        const fn_album_detail = pug.compileFile(p_album_detail, null);

        const html = fn_album_detail_tool_bar() + fn_album_detail({album: album});
        // console.log(html);
        res.send(html);
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
