const express = require('express');
const router = express.Router();

const album_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');


router.get('/', playlistMiddleware.getUserPlaylistInfo, sessionMiddleware.requiredLogin,
           album_controller.playlist_detail);

router.post('/create', sessionMiddleware.requiredLogin, album_controller.playlist_post);

router.get('/create', sessionMiddleware.requiredLogin, playlist_create_get);

router.get('/:id/detail', sessionMiddleware.requiredLogin, album_controller.playlist_details_get);

router.post('/modify', sessionMiddleware.requiredLogin, album_controller.playlist_modify_post);

module.exports = router;
