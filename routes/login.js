var express = require('express');
var router = express.Router();
const connection = require('typeorm').getConnection();
const bcrypt = require('bcrypt');
var middleware = require('../middleware/index');
const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');

router.get('/', [
  // Redirect to home page if already logged in.
  middleware.loggedOut,

  // Handle request.
  function (req, res, next) {
    res.render('login', {title: 'Login'});
  }
]);

router.post('/', [
  // Redirect to home page if already logged in.
  middleware.loggedOut,

  // Validate fields
  body('username')
    .exists().withMessage('Email address or username must be provided.'),
  body('password')
    .exists().withMessage('Password must be provided.'),

  // Sanitize fields.
  sanitizeBody('username').escape(),
  sanitizeBody('password').escape(),

  // Handle request.
  async function (req, res, next) {
    var errors = validationResult(req);

    // If form fields have validation errors.
    if (!errors.isEmpty()) {
      return res.render('login', {title: 'Login', errors: errors.array()});
    }

    // Authenticate user and create session if successful.
    const usersRepo = connection.getRepository('Users');
    const username = req.body.username; // username can be email or username here, since users can login w/ both
    var where = {};
    if (username.includes('@')) {
      where = {email: username};
    } else {
      where = {username: username};
    }
    const user = await usersRepo.findOne({where: where});

    if (user) {
      const correctPassword = await bcrypt.compare(req.body.password, user.password);
      if (correctPassword) {
        // If correct, assign session and redirect to home page.
        req.session.userId = user.id;
        req.session.userConfirmed = user.confirmed;
        return res.redirect('/');
      }
    }

    return res.render('login', {title: 'Login', errors: [{msg: 'Incorrect username or password.'}]});
  }
]);

module.exports = router;
