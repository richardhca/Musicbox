const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');
const connection = require('typeorm').getConnection();
const bcrypt = require('bcrypt');

exports.login_get = function (req, res, next) {
    res.render('login_form');
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
    async function (req, res, next) {
        const errors = validationResult(req);

        // If form fields have validation errors.
        if (!errors.isEmpty()) {
            return res.status(400).render('login_form', {errors: errors.array()});
        }

        // Authenticate user and create session if successful.
        const usersRepo = connection.getRepository('Users');
        const username = req.body.username; // username can be email or username here, since users can login w/ both
        var where = {};
        if (username.includes('@')) {
            where = {email: username};
        }
        else {
            where = {username: username};
        }
        const user = await usersRepo.findOne({where: where});

        if (user) {
            const correctPassword = await bcrypt.compare(req.body.password, user.password);
            if (correctPassword) {
                // If correct, assign session and redirect to home page.
                req.session.userId = user.id;
                req.session.isLoggedIn = true;
                req.session.userConfirmed = user.emailConfirmed;
                return res.redirect('/');
            }
        }
        return res.render('login_form', {errors: [{msg: 'Incorrect username or password.'}]});
    }
];
