const express = require('express');
const router = express.Router();
const tracksController = require('../controllers/tracksController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', sessionMiddleware.requiredLogin, tracksController.tracks_get);

module.exports = router;
