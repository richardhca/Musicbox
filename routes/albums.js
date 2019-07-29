const express = require('express');
const router = express.Router();
const albumsController = require('../controllers/albumsController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', sessionMiddleware.requiredLogin, albumsController.albums_get);

module.exports = router;
