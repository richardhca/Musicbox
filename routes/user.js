var express = require('express');
var router = express.Router();
var middleware = require('../middleware/index');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Auth protected page.
router.get('/profile', middleware.requiresLogin, function (req, res, next) {
  res.render('profile', {title: 'Profile'});
});

// Auth protected page.
router.get('/library', middleware.requiresLogin, function (req, res, next) {
  res.render('library', {title: 'Library'});
});


module.exports = router;
