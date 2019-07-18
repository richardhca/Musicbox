const express = require('express');
const router = express.Router();

const song_controller = require('../controllers/trackController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', song_controller.track_detail);

router.get('/create',
           song_controller.track_create_get);

module.exports = router;