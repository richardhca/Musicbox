const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const router = express.Router();

const playlist_controller = require('../controllers/playlistController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const playlistMiddleware = require('../middlewares/playlistMiddleware');

router.get('/', sessionMiddleware.requiredLogin, playlistMiddleware.getUserPlaylistInfo,
    playlist_controller.playlist_page_get);

router.post('/create', function(req, res) { 
	var filename = req.body.PlaylistName;
	fs.writeFile('./public/playlists/'+filename, '', function(err) {
		if (err) throw err;
		console.log('Playlist Created.');
	});
	res.status(200).end();
	res.redirect('/playlist');
});

router.get('/detail', sessionMiddleware.requiredLogin, playlist_controller.playlist_detail_get);

module.exports = router;