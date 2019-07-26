const express = require('express');
const router = express.Router();

const playlist_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');

router.get('/', playlistMiddleware.getUserPlaylistInfo,
    playlist_controller.playlist_page_get);

router.get('/create', playlist_controller.playlist_create_get);

module.exports = router;