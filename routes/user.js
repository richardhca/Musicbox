var express = require('express');
var router = express.Router();
var sessionMiddleware = require('../middlewares/sessionMiddleware');
var userController = require('../controllers/userController');


router.get('/profile', sessionMiddleware.requiredLogin, userController.profile_get);

router.put('/profile', sessionMiddleware.requiredLogin, userController.profile_put);

router.put('/password', sessionMiddleware.requiredLogin, userController.password_put);

module.exports = router;
