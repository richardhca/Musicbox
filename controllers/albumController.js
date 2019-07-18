const path = require('path');
const pug = require('pug');


exports.album_detail = (req, res, next) => {
    const info = req.query.info;
    const type = req.query.type;
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p = path.join(__dirname, '../views/album_detail.pug');
        const fn = pug.compileFile(p, null);
        const html = fn({title: 'this is album page'});
        console.log(html);

        res.send(html);
    }
    else {
        console.log('server receive a empty req');
        // res.render('album_ detail');
    }
};

exports.album_create_get = (req, res, next) => {
    const info = req.query.info;
    const type = req.query.type;
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p = path.join(__dirname, '../views/album_create.pug');
        const fn = pug.compileFile(p, null);
        const html = fn({title: 'this is album create page'});
        console.log(html);

        res.send(html);
    }
    else {
        console.log('server receive a empty req');
        // res.render('album_ detail');
    }
};