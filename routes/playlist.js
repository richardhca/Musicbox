const express = require('express');
const router = express.Router();

const playlistController = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');
const commentsController = require('../controllers/commentsController');

router.get('/', playlistMiddleware.getUserPlaylistInfo, sessionMiddleware.requiredLogin, playlistController.playlist_detail);

router.post('/create', sessionMiddleware.requiredLogin, playlistController.playlist_create_post);

router.get('/create', sessionMiddleware.requiredLogin, playlistController.playlist_create_get);

router.get('/:id/detail', sessionMiddleware.requiredLogin, playlistController.playlist_details_get);

router.post('/:playlistId/add', sessionMiddleware.requiredLogin, playlistController.playlist_add_post);

router.delete('/:playlistId/delete', sessionMiddleware.requiredLogin, playlistController.playlist_tracks_delete);

router.post('/modify', sessionMiddleware.requiredLogin, playlistController.playlist_modify_post);

//comments

router.post('/:playlistId/add_comment',sessionMiddleware.requiredLogin,commentsController.comment_create_post);
router.post('/:playlistId/:comment_id/delete',sessionMiddleware.requiredLogin,commentsController.comment_delete);


module.exports = router;
