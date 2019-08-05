const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');


router.get('/', sessionMiddleware.requiredLogin, profileController.change_profile_post);

module.exports = router;