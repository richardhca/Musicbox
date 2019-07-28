const express = require('express');
const router = express.Router();

const trackController = require('../controllers/trackController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', trackController.track_detail);

router.get(
    '/details/:id',
    sessionMiddleware.requiredLogin,
    trackController.track_detail_get
);

router.delete('/delete/:id',sessionMiddleware.requiredLogin,trackController.track_delete);

// router.get('/create',
//            song_controller.track_create_get);

module.exports = router;
