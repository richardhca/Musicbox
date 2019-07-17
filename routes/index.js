const express = require('express');
const router = express.Router();

const sessionMiddleware = require('../middlewares/sessionMiddleware');

// router.get('/', sessionMiddleware.requiredLogin, function (req, res, next) {
//     res.render('index');
// });

// for test
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;

