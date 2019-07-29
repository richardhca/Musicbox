const path = require('path');
const pug = require('pug');
const connection = require('typeorm').getConnection();

exports.track_page_get = async function (req, res, next) {
    const info = req.query.info;
    const type = req.query.type;
    const tracks = await connection.getRepository('Tracks').find({owner_id: req.session.userId});
    // console.log(tracks);
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_track_page_tool_bar = path.join(__dirname,
            '../views/track_page_tool_bar.pug');
        const fn_track_page_tool_bar = pug.compileFile(
            p_track_page_tool_bar, null);

        const p_track_page = path.join(__dirname,
            '../views/track_page.pug');
        const fn_track_page = pug.compileFile(p_track_page, null);

        const html = fn_track_page_tool_bar() + fn_track_page({tracks: tracks});
        // console.log(html);
        res.send(html);
    }
    else {
        console.log('server receive a empty req: /track');

        res.render('index',
            {page: 'track_page_get', tracks: tracks});
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
    const track = await connection.getRepository('Tracks').findOne({id: id});

    // If no track found, return empty object
    res.send(track || {});
};

// exports.track_create_get = (req, res, next) => {
//     const info = req.query.info;
//     const type = req.query.type;
//     if (info && type) {
//         console.log('server receive a req, type: ', type, ' , info: ', info);
//         const p = path.join(__dirname, '../views/track_create.pug');
//         const fn = pug.compileFile(p, null);
//         const html = fn({title: 'this is track create page'});
//         console.log(html);
//
//         res.send(html);
//     }
//     else {
//         console.log('server receive a empty req');
//         res.render('index', {
//             page: 'track_create', title: 'this is track create page'
//         });
//     }
// };
