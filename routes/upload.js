const express = require('express');
const router = express.Router();
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const {upload} = require('../config/multerConfig');
const uploadController = require('../controllers/uploadController');


router.get('/', function (req, res, next) {
    res.render('upload');
});

router.post('/',
    sessionMiddleware.requiredLogin,
    upload.array('media', 10), // Max upload = 10
    uploadController.upload_post
);

module.exports = router;
