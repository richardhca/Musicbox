const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const router = express.Router();

const playlist_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');

router.get('/', playlistMiddleware.getUserPlaylistInfo,
    sessionMiddleware.requiredLogin, playlist_controller.playlist_page_get);

router.get('/create', sessionMiddleware.requiredLogin,
    playlist_controller.playlist_create_get);

router.post('/create', sessionMiddleware.requiredLogin,
    playlist_controller.playlist_create_post);

router.get('/:id/detail', sessionMiddleware.requiredLogin,
    playlist_controller.playlist_detail_get);

// router.post('/create', function(req, res) {
// 	var filename = req.body.PlaylistName;
// 	fs.writeFile('./public/playlists/'+filename, '', function(err) {
// 		if (err) throw err;
// 		console.log('Playlist Created.');
// 	});
// 	res.status(200).end();
// 	res.redirect('/playlist');
// });

router.post('/:playlistId/add', sessionMiddleware.requiredLogin,
    playlist_controller.playlist_add_post);

router.delete('/:playlistId/delete', sessionMiddleware.requiredLogin,
    playlist_controller.playlist_tracks_delete);

router.post('/modify', sessionMiddleware.requiredLogin,
    playlist_controller.playlist_modify_post);

module.exports = router;
