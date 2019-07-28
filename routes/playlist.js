const express = require('express');
const router = express.Router();

const playlistController = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');


router.get('/', playlistMiddleware.getUserPlaylistInfo, sessionMiddleware.requiredLogin, playlistController.playlist_detail);

router.post('/create', sessionMiddleware.requiredLogin, playlistController.playlist_create_post);

router.get('/create', sessionMiddleware.requiredLogin, playlistController.playlist_create_get);

router.get('/:id/detail', sessionMiddleware.requiredLogin, playlistController.playlist_details_get);

router.post('/modify', sessionMiddleware.requiredLogin, playlistController.playlist_modify_post);

module.exports = router;
