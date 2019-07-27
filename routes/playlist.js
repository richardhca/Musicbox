const express = require('express');
const router = express.Router();

const album_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');


router.get('/', playlistMiddleware.getUserPlaylistInfo, sessionMiddleware.requiredLogin,
           album_controller.playlist_detail);

router.get('/create', sessionMiddleware.requiredLogin, album_controller.playlist_create_get);

router.get('/add', sessionMiddleware.requiredLogin, album_controller.playlist_send);

router.get('/check', sessionMiddleware.requiredLogin, album_controller.playlist_valid);

router.get('/delete', sessionMiddleware.requiredLogin, album_controller.playlist_delete);

router.get('/modify', sessionMiddleware.requiredLogin, album_controller.playlist_modify);

router.get('/:id/detail', sessionMiddleware.requiredLogin, album_controller.playlist_details_get);

router.get('/:id/detail', sessionMiddleware.requiredLogin, album_controller.playlist_details_get);

router.post('/modify', sessionMiddleware.requiredLogin, album_controller.playlist_modify_post);

module.exports = router;