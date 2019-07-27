const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/details/:id/', sessionMiddleware.requiredLogin, albumController.album_detail_get);

router.get('/delete/:id/', sessionMiddleware.requiredLogin, albumController.album_delete);

module.exports = router;
