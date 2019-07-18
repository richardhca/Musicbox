var express = require('express');
var router = express.Router();

var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/useruploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', sessionMiddleware.requiredLogin, function (req, res, next) {
    res.render('index');
});

router.post('/', upload.single('music'), function(req, res, next){
	var file = req.file;
    console.log('file type：%s', file.mimetype);
    console.log('filename：%s', file.originalname);
    console.log('filesize：%s', file.size);
    console.log('filepath：%s', file.path);
	console.log('upload successful');
	res.status(200).end();
	res.redirect('/')
});

module.exports = router;