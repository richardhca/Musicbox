const express = require('express');
const router = express.Router();
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const indexController = require('../controllers/indexController');

router.get('/', sessionMiddleware.requiredLogin, indexController.index_get);

router.get('/', sessionMiddleware.requiredLogin, indexController.change_profile_post);

module.exports = router;
