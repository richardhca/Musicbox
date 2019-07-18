const path = require('path');
const pug = require('pug');


exports.playlist_detail = (req, res, next) => {
    const info = req.query.info;
    const type = req.query.type;
    if (info && type) {
        const p_playlist_detail_tool_bar = path.join(__dirname,
                                                     '../views/playlist_tool_bar.pug');
        const fn_playlist_detail_tool_bar = pug.compileFile(
            p_playlist_detail_tool_bar, null);
        const p_playlist_detail = path.join(__dirname,
                                            '../views/playlist_detail.pug');
        const fn_playlist_detail = pug.compileFile(p_playlist_detail, null);
        const html = fn_playlist_detail_tool_bar() + fn_playlist_detail(
            {title: 'this is playlist page'});
        console.log(html);

        res.send(html);
    }
    else {
        console.log('server receive a empty req');
        res.render('index',
                   {page: 'playlist_detail', title: 'this is playlist page'});
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
        console.log('server receive a empty req');
        res.render('index',
                   {
                       page: 'playlist_create', title: 'this is playlist'
                                                       + ' create page'
                   });
    }
};