const express = require('express');
const router = express.Router();
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const indexController = require('../controllers/indexController');

router.get('/', sessionMiddleware.requiredLogin, indexController.index_get);


module.exports = router;
