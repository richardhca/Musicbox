const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', sessionMiddleware.requiredLogin, loginController.login_get);

router.post('/', sessionMiddleware.requiredLogin, loginController.login_post);

module.exports = router;
