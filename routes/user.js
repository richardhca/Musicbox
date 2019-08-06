var express = require('express');
var router = express.Router();
var sessionMiddleware = require('../middlewares/sessionMiddleware');
var userController = require('../controllers/userController');


router.get('/profile', sessionMiddleware.requiredLogin, userController.profile_get);

router.post('/profile', sessionMiddleware.requiredLogin, userController.profile_post);

router.post('/password', sessionMiddleware.requiredLogin, userController.password_post);

module.exports = router;
