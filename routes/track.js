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

router.delete(
    '/delete/:id',
    sessionMiddleware.requiredLogin,
    track_controller.track_delete
);

router.put(
    '/modify/:trackId',
    sessionMiddleware.requiredLogin,
    track_controller.track_modify_put
);

router.get(
	'/:trackId',
	sessionMiddleware.requiredLogin,
	track_controller.track_link_get
);

module.exports = router;
