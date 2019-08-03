const path = require('path');
const uuidv4 = require('uuid/v4');
const multer = require('multer');
const projectRoot = require('./projectRoot');


// Allowed audio mime types
const audioMimeTypeToExt = {
    'audio/wav': '.wav',
    'audio/mp3': '.mp3',
};

// Allowed image mime types
const imageMimeTypeToExt = {
    'image/jpeg': '.jpg',
    'image/png': '.png'
};

// Storage options
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(projectRoot.path, '/public/tracks/'))
    },
    filename: function (req, file, cb) {
        // New file name is uuid + extension (i.e. '10ba038e-48da-487b-96e8-8d3b99b6d18a.mp3')
        cb(null, uuidv4() + audioMimeTypeToExt[file.mimetype])
    }
});


// Filter options
const filter = function (req, file, cb) {
    if (!(file.mimetype.toLowerCase() in audioMimeTypeToExt)) {
        // Reject upload
        cb(null, false);
    }
    // Accept upload
    cb(null, true);
};

const uploadMiddleware = (req, res, next) => {
    multer(
        {
            storage: storage,
            fileFilter: filter,
            limits: {fileSize: 50000000} //50mb
        }
    ).array('tracks', 10)(req, res, function (err) {
        if (err && err.code === "LIMIT_FILE_SIZE") {
            return res.status(413).send(err.message);
        }
        next();
    });
};

module.exports = {
    audioMimeTypeToExt,
    imageMimeTypeToExt,
    uploadMiddleware: uploadMiddleware,
};
