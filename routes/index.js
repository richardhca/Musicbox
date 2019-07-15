const express = require('express');
const router = express.Router();

const sessionMiddleware = require('../middlewares/sessionMiddleware');

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
