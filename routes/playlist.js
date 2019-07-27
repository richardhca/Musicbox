const express = require('express');
const router = express.Router();

const playlist_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');

router.get('/', sessionMiddleware.requiredLogin, playlistMiddleware.getUserPlaylistInfo,
    playlist_controller.playlist_page_get);

router.get('/create', sessionMiddleware.requiredLogin, playlist_controller.playlist_create_get);

router.get('/detail', sessionMiddleware.requiredLogin, playlist_controller.playlist_detail_get);

module.exports = router;