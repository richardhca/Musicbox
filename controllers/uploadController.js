const {processUploads} = require('../utilities/uploadsProcessor');


exports.upload_post = async function (req, res, next) {
    var processedTracks = [];

    if (req.files && req.files.length) {
        processedTracks = await processUploads(req, res);
    }

    res.status(200).send({uploaded: processedTracks});
};
