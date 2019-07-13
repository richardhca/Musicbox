const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', sessionMiddleware.requiredLogin,
           registerController.register_get);

router.post('/', sessionMiddleware.requiredLogin,
            registerController.register_post);

module.exports = router;
