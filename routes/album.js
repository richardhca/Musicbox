const express = require('express');
const router = express.Router();

const album_controller = require('../controllers/albumController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', album_controller.album_detail);

router.get('/create', album_controller.album_create_get);

module.exports = router;