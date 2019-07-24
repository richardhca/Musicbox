const path = require('path');
const pug = require('pug');
const connection = require('typeorm').getConnection();

exports.track_detail = async function (req, res, next) {
    const info = req.query.info;
    const type = req.query.type;
    const tracks = await connection.getRepository('Tracks').find({owner_id: req.session.userId});
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_track_detail_tool_bar = path.join(__dirname,
            '../views/track_tool_bar.pug');
        const fn_track_detail_tool_bar = pug.compileFile(
            p_track_detail_tool_bar, null);

        const p_track_detail = path.join(__dirname,
            '../views/track_detail.pug');
        const fn_track_detail = pug.compileFile(p_track_detail, null);

        const html = fn_track_detail_tool_bar() + fn_track_detail({tracks: tracks});
        // console.log(html);
        res.send(html);
    }
    else {
        console.log('server receive a empty req');
        console.log(tracks);
        res.render('index',
            {page: 'track_detail', tracks: tracks});
    }
};
