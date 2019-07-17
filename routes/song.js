const express = require('express');
const router = express.Router();

const song_controller = require('../controllers/songController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', song_controller.song_detail);

router.get('/create',
           song_controller.song_create_get);

module.exports = router;