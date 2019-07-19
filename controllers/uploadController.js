const {processUploads} = require('../utilities/uploadsProcessor');


exports.upload_post = async function (req, res, next) {

    if (req.files && req.files.length) {
        await processUploads(req);
    }

    res.redirect(req.originalUrl);
};
