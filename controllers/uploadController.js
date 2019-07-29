const {processUploads} = require('../utilities/uploadsProcessor');

exports.upload_post = async function (req, res, next) {
    console.log('here');
    if (req.files && req.files.length) {
        await processUploads(req);
        console.log('Upload successful.');
        res.status(200).end();
    }
    else {
        res.status(404).end();
    }

};