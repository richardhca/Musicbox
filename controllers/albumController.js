exports.album_detail = (req, res, next) => {
    const info = req.query.info;
    const type = req.query.type;
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        res.send();
    }
    else {
        console.log('server receive a empty req');
        res.render('album_ detail');
    }
};

exports.album_create_get = (req, res, next) => {
    res.render('album_create');
};