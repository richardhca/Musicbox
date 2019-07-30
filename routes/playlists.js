const express = require('express');
const router = express.Router();

const playlistsController = require('../controllers/playlistsController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');


router.get('/', sessionMiddleware.requiredLogin, playlistsController.playlists_get);

module.exports = router;
