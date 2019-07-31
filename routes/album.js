const express = require('express');
const router = express.Router();


const album_controller = require('../controllers/albumController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', sessionMiddleware.requiredLogin, album_controller.album_page_get);

router.get('/detail/', sessionMiddleware.requiredLogin, album_controller.album_detail_get);

module.exports = router;
