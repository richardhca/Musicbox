const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    res.send('this is song page');
});

module.exports = router;