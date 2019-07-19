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
var upload = multer({ storage: storage }).array('music', 10);

const sessionMiddleware = require('../middlewares/sessionMiddleware');

// router.get('/', sessionMiddleware.requiredLogin, function (req, res, next) {
//     res.render('index');
// });

// for test
router.get('/', function (req, res, next) {
    res.redirect('/track');
});

router.post('/', function(req, res){
	upload(req, res, function(err){
		if(err){
			return res.end("Error uploading file.");
		}
		console.log('upload successful');
		res.status(200).end();
		res.redirect('/')
	});
});

module.exports = router;