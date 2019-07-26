const path = require('path');
const pug = require('pug');

exports.album_detail = function (req, res, next) {
    const info = req.query.info;
    const type = req.query.type;

    // console.log(tracks);
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_album_detail_tool_bar = path.join(__dirname,
            '../views/album_tool_bar.pug');
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
        console.log('server receive a empty req: /album');

        res.render('index',
            {page: 'album_detail'});
    }
};
