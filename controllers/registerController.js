const User = require('../models/user');
const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');

exports.register_get = function (req, res, next) {
    res.render('register_form',
               {
                   script: ['javascripts/show_and_hidden_password.js']
               });
};

exports.register_post = [
    // Validate fields.
    body('username')
        .trim()
        .exists()
        .isLength({min: 3})
        .withMessage('Username must be more than 3 characters.')
        .isLength({max: 25})
        .withMessage('Username cannot be more than 25 characters.')
        .isAlphanumeric()
        .withMessage('Username must not have non-alphanumeric characters.'),
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
        .isLength({min: 8})
        .withMessage('Password must be more than 8 characters.')
        .isLength({max: 35})
        .withMessage('Password cannot be more than 35 characters.')
        .custom(function (value, {req}) {
            if (value !== req.body.confirmPassword) {
                throw new Error('Passwords do not match.');
            }
            else {
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

        const newUserData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            date_of_birth: req.body.date_of_birth,
        };

        // If form fields have validation errors.
        if (!errors.isEmpty()) {
            return res.render('register_form', {
                user: newUserData,
                script: ['javascripts/show_and_hidden_password.js'],
                errors: errors.array()
            });
        }

        // Create new user
        User.create(newUserData, function (mongooseError, user) {
            if (mongooseError) {
                // If one of the unique fields already exists.
                if (mongooseError.code === 11000) {
                    var errors;
                    if (mongooseError.errmsg.includes('email')) {
                        errors =
                            `Email address "${req.body.email}" is already taken.`;
                    }
                    else {
                        errors =
                            `Username "${req.body.username}" is already taken.`;
                    }
                    return res.render('register_form', {
                        user: newUserData,
                        script: ['javascripts/show_and_hidden_password.js'],
                        errors: [{msg: errors}]
                    });
                }
                // Other database errors are handled here.
                const err = new Error();
                err.status = 503;
                return next(err);
            }
            else {
                // If all goes well.
                req.session.user_id = user._id;
                req.session.isLoggedIn = true;
                req.session.userConfirmed = user.confirmed;
                res.redirect('/');
            }
        });
    }
];


