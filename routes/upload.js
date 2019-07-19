var express = require('express');
var multer = require('multer');
var router = express.Router();

var app = express();

router.get('/index', function(req, res, next) {
  res.redirect('/index');
});

module.exports = router;