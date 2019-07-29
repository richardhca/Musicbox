const express = require('express');
const router = express.Router();

const track_controller = require('../controllers/trackController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', sessionMiddleware.requiredLogin, track_controller.track_page_get);


router.get(
    '/details/:id',
    sessionMiddleware.requiredLogin,
    track_controller.track_detail_get
);


// router.get('/create',
//            song_controller.track_create_get);

module.exports = router;
