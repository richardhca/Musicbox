const path = require('path');
const pug = require('pug');

exports.album_page_get = function (req, res, next) {
    const info = req.query.info;
    const type = req.query.type;

    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_album_page_tool_bar = path.join(__dirname,
            '../views/album_page_tool_bar.pug');
        const fn_album_page_tool_bar = pug.compileFile(
            p_album_page_tool_bar, null);

        const p_album_page = path.join(__dirname,
            '../views/album_page.pug');
        const fn_album_page = pug.compileFile(p_album_page, null);

        const html = fn_album_page_tool_bar() + fn_album_page();
        // console.log(html);
        res.send(html);
    }
    else {
        console.log('server receive a empty req: /album');

        res.render('index',
            {page: 'album_page_get'});
    }
};

exports.album_detail_get = function (req, res, next) {

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

        const html = fn_album_detail_tool_bar() + fn_album_detail();
        // console.log(html);
        res.send(html);
    }
    else {
        console.log('server receive a empty req: /album/detail');

        res.render('index',
            {page: 'album_detail_get'});
    }

};
