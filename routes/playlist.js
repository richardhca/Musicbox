const express = require('express');
const router = express.Router();

const playlist_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');

router.get('/', sessionMiddleware.requiredLogin, playlistMiddleware.getUserPlaylistInfo,
    playlist_controller.playlist_page_get);

router.post('/create', sessionMiddleware.requiredLogin, playlist_controller.playlist_create_post);

//test
router.get('/detail', sessionMiddleware.requiredLogin, playlist_controller.playlist_detail_get);

router.get('/:id/detail', sessionMiddleware.requiredLogin, playlist_controller.playlist_details_get);

router.post('/:playlistId/add', sessionMiddleware.requiredLogin, playlist_controller.playlist_add_post);

router.delete('/:playlistId/delete', sessionMiddleware.requiredLogin, playlist_controller.playlist_tracks_delete);

router.post('/share', sessionMiddleware.requiredLogin, playlist_controller.playlist_share_post);

router.delete('/:shareId/share', sessionMiddleware.requiredLogin, playlist_controller.playlist_share_delete);

router.post('/modify', sessionMiddleware.requiredLogin, playlist_controller.playlist_modify_post);

module.exports = router;
