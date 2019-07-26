const express = require('express');
const router = express.Router();

const track_controller = require('../controllers/trackController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', sessionMiddleware.requiredLogin, track_controller.track_detail);


module.exports = router;
