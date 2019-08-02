const express = require('express');
const router = express.Router();

const playlist_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');

router.get('/', sessionMiddleware.requiredLogin, playlistMiddleware.getUserPlaylistInfo,
    playlist_controller.playlist_page_get);

router.post('/create', sessionMiddleware.requiredLogin, playlist_controller.playlist_create_post);

router.delete('/delete/:playlistId', sessionMiddleware.requiredLogin, playlist_controller.playlist_delete);

//test
router.get('/detail', sessionMiddleware.requiredLogin, playlist_controller.playlist_detail_get);

router.get('/:id/detail', sessionMiddleware.requiredLogin, playlist_controller.playlist_details_get);

router.post('/:playlistId/add', sessionMiddleware.requiredLogin, playlist_controller.playlist_add_post);

router.delete('/:playlistId/delete', sessionMiddleware.requiredLogin, playlist_controller.playlist_tracks_delete);

router.post('/:playlistId/share', sessionMiddleware.requiredLogin, playlist_controller.playlist_share_post);

router.delete('/:shareId/share', sessionMiddleware.requiredLogin, playlist_controller.playlist_share_delete);

router.put('/:shareId/share', sessionMiddleware.requiredLogin, playlist_controller.playlist_share_put);

router.get('/:playlistId/shares', sessionMiddleware.requiredLogin, playlist_controller.playlist_shares_get);

router.post('/modify', sessionMiddleware.requiredLogin, playlist_controller.playlist_modify_post);

router.post('/:playlistId/rename',sessionMiddleware.requiredLogin, playlist_controller.playlist_rename_post);

module.exports = router;
