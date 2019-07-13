const express = require('express');
const router = express.Router();
const User = require('../models/user');
const middleware = require('../middleware/index');
const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');

router.get('/', [
  // Redirect to home page if already logged in.
  middleware.loggedOut,

  // Handle request.
  function (req, res, next) {
    res.render('login_form', {title: 'Login'});
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
  function (req, res, next) {
    const errors = validationResult(req);

    // If form fields have validation errors.
    if (!errors.isEmpty()) {
      return res.render('login', {title: 'Login', errors: errors.array()});
    }

    // Authenticate user and create session if successful.
    User.authenticate(req.body.username, req.body.password, function (errors, user) {
      if (errors) {
        return res.render('login', {title: 'Login', errors: errors});
      } else {
        req.session.userId = user._id;
        req.session.userConfirmed = user.confirmed;
        return res.redirect('/');
      }
    });
  }
]);

module.exports = router;
