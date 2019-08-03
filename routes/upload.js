const express = require('express');
const router = express.Router();
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const {uploadMiddleware} = require('../config/multerConfig');
const uploadController = require('../controllers/uploadController');

router.post('/',
    sessionMiddleware.requiredLogin,
    uploadMiddleware,
    uploadController.upload_post
);
module.exports = router;
