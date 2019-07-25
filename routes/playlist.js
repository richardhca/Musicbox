const express = require('express');
const router = express.Router();

const album_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');

router.get('/', playlistMiddleware.getUserPlaylistInfo,
           album_controller.playlist_detail);

//go to playlist create page?
router.get('/create', album_controller.playlist_create_get);

router.get('/:id/detail', sessionMiddleware.requiredLogin, album_controller.playlist_details_get);

router.post('/modify', sessionMiddleware.requiredLogin, album_controller.playlist_modify_post);

module.exports = router;