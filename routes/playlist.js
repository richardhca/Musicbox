const express = require('express');
const router = express.Router();

const album_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');

router.get('/', playlistMiddleware.getUserPlaylistInfo,
           album_controller.playlist_detail);

router.get('/create', album_controller.playlist_create_get);

module.exports = router;