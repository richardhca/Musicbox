const {processUploads} = require('../utilities/uploadsProcessor');

exports.upload_post = async function (req, res, next) {

    // res.io.on('connection', function (socket) {
    //     console.log('upload connected');
    //     socket.emit('pencent', '当前进度50%');
    //     socket.on('disconnect', function () {
    //         console.log('upload disconnected');
    //     });
    // });
    console.log('here');
    if (req.files && req.files.length) {
        await processUploads(req);
        console.log('Upload successful.');

        // res.io.on('connection', function (socket) {
        //     socket.emit('news', {hello: 'world1'});
        //     socket.on('my other event', function (data) {
        //         console.log(data);
        //     });
        // });
        res.send('1');
    }
    else {
        res.status(404).end();
    }

};


exports.test = function (req, res, next) {
    console.log('upload test');
    res.io.on('connection', function (socket) {
        console.log('upload connected');
        socket.emit('pencent', '当前进度50%');
        socket.on('disconnect', function () {
            console.log('upload disconnected');

        });

    });
    res.redirect('/track');
};

