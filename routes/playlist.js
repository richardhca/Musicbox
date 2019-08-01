const express = require('express');
const router = express.Router();

const playlist_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');

router.get('/', sessionMiddleware.requiredLogin, playlistMiddleware.getUserPlaylistInfo,
    playlist_controller.playlist_page_get);

router.get('/create', sessionMiddleware.requiredLogin, playlist_controller.playlist_create_get);

router.get('/:id/detail', sessionMiddleware.requiredLogin, playlist_controller.playlist_details_get);

router.post('/:playlistId/add', sessionMiddleware.requiredLogin, playlist_controller.playlist_add_post);

router.delete('/:playlistId/delete', sessionMiddleware.requiredLogin, playlist_controller.playlist_tracks_delete);

router.post('/:playlistId/share', sessionMiddleware.requiredLogin, playlist_controller.playlist_share_post);

router.delete('/:shareId/share', sessionMiddleware.requiredLogin, playlist_controller.playlist_share_delete);

router.post('/modify', sessionMiddleware.requiredLogin, playlist_controller.playlist_modify_post);

router.post('/:playlistId/rename',sessionMiddleware.requiredLogin, playlist_controller.playlist_rename_post);

module.exports = router;
