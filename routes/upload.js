var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({dest: 'uploads/'});


router.get('/', function (req, res, next) {
  res.render('upload');
});

router.post('/', upload.array('media', 12), function (req, res, next) {
  console.log('test');
});

module.exports = router;
