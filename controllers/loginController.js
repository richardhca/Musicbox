const User = require('../models/user');
const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');


exports.login_get = function (req, res, next) {
    res.render('login_form',
               {
                   script: ['javascripts/show_and_hidden_password.js']
               });
};


exports.login_post = [

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
            return res.render('login_form',
                              {
                                  script: ['javascripts/show_and_hidden_password.js'],
                                  errors: errors.array()
                              });
        }

        // Authenticate user and create session if successful.
        User.authenticate(req.body.username, req.body.password,
                          function (errors, user) {

                              if (errors) {
                                  return res.render('login_form', {
                                      script: ['javascripts/show_and_hidden_password.js'],
                                      errors: errors
                                  });
                              }
                              else {
                                  req.session.user_id = user._id;
                                  req.session.isLoggedIn = true;
                                  req.session.userConfirmed = user.confirmed;
                                  return res.redirect('/');
                              }
                          });
    }
];