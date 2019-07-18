const express = require('express');
const router = express.Router();

const multer = require('multer');
const uploadDest = 'public/media/';
const allowedMimeTypes = ['audio/wav', 'audio/mp3'];
const filter = function (req, file, cb) {
  if (!allowedMimeTypes.includes(file.mimetype.toLowerCase())) {
    cb(null, false);
    // return cb(new Error('Wrong file type'));
  }
  cb(null, true);
};

var upload = multer({
  dest: uploadDest,
  fileFilter: filter,
});


router.get('/', function (req, res, next) {
  res.render('upload');
});

router.post('/', upload.array('media', 12), function (req, res, next) {
  console.log('file-');
});

module.exports = router;
