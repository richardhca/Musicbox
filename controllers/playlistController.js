const path = require('path');
const pug = require('pug');

exports.playlist_page_get = (req, res, next) => {
    const info = req.query.info;
    const type = req.query.type;

    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_playlist_page_tool_bar = path.join(__dirname,
            '../views/playlist_page_tool_bar.pug');
        const fn_playlist_page_tool_bar = pug.compileFile(
            p_playlist_page_tool_bar, null);
        const p_playlist_page = path.join(__dirname,
            '../views/playlist_page.pug');
        const fn_playlist_page = pug.compileFile(p_playlist_page, null);

        const image_path = path.join(__dirname,
            '../public/images/test.png');

        const html = fn_playlist_page_tool_bar() + fn_playlist_page(
            {path: image_path});
        // console.log(html);

        res.send(html);
    }
    else {
        console.log('server receive a empty req');
        const image_path = path.join('../public/images/test.png');
        res.render('index',
            {page: 'playlist_page_get', path: image_path});
    }
};

exports.playlist_create_get = (req, res, next) => {
    const info = req.query.info;
    const type = req.query.type;
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p = path.join(__dirname, '../views/playlist_create.pug');
        const fn = pug.compileFile(p, null);
        const html = fn({title: 'this is playlist create page'});
        console.log(html);

        res.send(html);
    }
    else {
        console.log('server receive a empty req : /playlist');
        res.render('index',
            {
                page: 'playlist_create', title: 'this is playlist'
                    + ' create page'
            });
    }
};