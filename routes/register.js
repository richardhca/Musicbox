var express = require('express');
var router = express.Router();
var User = require('../models/user');
const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');
var middleware = require('../middleware/index');


router.get('/', [
  // Redirect to home page if already logged in.
  middleware.loggedOut,

  // Handle request.
  function (req, res, next) {
    res.render('register', {title: 'Sign Up'});
  }
]);

router.post('/', [

  // Redirect to home page if already logged in.
  middleware.loggedOut,

  // Validate fields.
  body('username')
    .trim()
    .exists()
    .isLength({min: 3}).withMessage('Username must be more than 2 characters.')
    .isLength({max: 25}).withMessage('Username cannot be more than 25 characters.')
    .isAlphanumeric().withMessage('Username must not have non-alphanumeric characters.'),
  body('email')
    .trim()
    .exists()
    .isEmail().withMessage('Invalid email address.'),
  body('date_of_birth', 'Invalid date of birth')
    .exists()
    .isISO8601(),
  body('password')
    .exists()
    .isAlphanumeric().withMessage('Password must be alphanumeric.')
    .isLength({min: 8}).withMessage('Password must be more than 8 characters.')
    .isLength({max: 35}).withMessage('Password cannot be more than 35 characters.')
    .custom(function (value, {req}) {
      if (value !== req.body.confirmPassword) {
        throw new Error('Passwords do not match.');
      } else {
        return true;
      }
    }),

  // Sanitize input.
  sanitizeBody('username').escape(),
  sanitizeBody('email').escape(),
  sanitizeBody('date_of_birth').toDate(),
  sanitizeBody('password').escape(),

  // Handle request.
  async function (req, res, next) {
    const errors = validationResult(req);

    var newUserData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      date_of_birth: req.body.date_of_birth,
    };

    // If form fields have validation errors.
    if (!errors.isEmpty()) {
      return res.render('register', {title: 'Register', user: newUserData, errors: errors.array()});
    }

    // Create new user
    User.create(newUserData, function (mongooseError, user) {
      if (mongooseError) {
        // If one of the unique fields already exists.
        if (mongooseError.code === 11000) {
          if (mongooseError.errmsg.includes('email')) {
            errMessage = `Email address "${req.body.email}" is already taken.`;
          } else {
            errMessage = `Username "${req.body.username}" is already taken.`;
          }
          return res.render('register', {title: 'Register', user: newUserData, errors: [{msg: errMessage}]});
        }
        // Other database errors are handled here.
        var err = new Error();
        err.status = 503;
        return next(err);
      } else {
        // If all goes well.
        req.session.userId = user._id;
        req.session.userConfirmed = user.confirmed;
        res.redirect('/');
      }
    });
  }
]);

module.exports = router;
