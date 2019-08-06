const connection = require('typeorm').getConnection();
const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');
const bcrypt = require('bcrypt');

exports.profile_get = async function (req, res, next) {
    const info = req.query.info;
    const type = req.query.type;
    const profile = await connection.getRepository('Users').findOne({id: req.session.userId});
    delete profile['password'];
	console.log(profile);
	if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        res.send({profile: profile});
    }
    else {
        console.log('server receive a empty req: /user/profile');

        res.render('index',
            {page: 'profile_get', profile: profile});
    }
};

exports.profile_put = [
    // Validate fields.
    body('email')
        .trim()
        .exists()
        .isEmail().withMessage('Invalid email address.'),
    body('date_of_birth', 'Invalid date of birth')
        .exists()
        .isISO8601(),
    body('first_name')
        .trim()
        .exists()
        .isLength({min: 3}).withMessage('First name must be more than 2 characters.')
        .isLength({max: 25}).withMessage('First name cannot be more than 25 characters.')
        .isAlpha().withMessage('First name must not have non-alphabetical characters.'),

    body('last_name')
        .trim()
        .exists()
        .isLength({min: 3}).withMessage('Last name must be more than 2 characters.')
        .isLength({max: 25}).withMessage('Last name cannot be more than 25 characters.')
        .isAlpha().withMessage('Last name must not have non-alphabetical characters.'),

    // Sanitize input.
    sanitizeBody('email').escape(),
    sanitizeBody('date_of_birth').toDate(),
    sanitizeBody('first_name').escape(),
    sanitizeBody('last_name').escape(),


    // Handle request.
    async function (req, res, next) {
        const errors = validationResult(req);

        var newUserData = {
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            date_of_birth: req.body.date_of_birth,
        };

        // If form fields have validation errors.
        if (!errors.isEmpty()) {
            return res.status(400).send({submittedData: newUserData, errors: errors.array()});
        }

        const usersRepo = connection.getRepository('Users');
        var user = await usersRepo.findOne({id: req.session.userId});

        // Merge new data (new fields replace old ones)
        user = Object.assign(user, newUserData);
        await usersRepo.save(user);

        res.send("Profile updated.");
    }
];

exports.password_put = [
    // Validate fields.
    body('oldPassword')
        .exists().withMessage('You must provide the old password.'),
    body('newPassword')
        .exists()
        .isAlphanumeric().withMessage('New password must be alphanumeric.')
        .isLength({min: 8}).withMessage('New password must be more than 8 characters.')
        .isLength({max: 35}).withMessage('New password cannot be more than 35 characters.')
        .custom(function (value, {req}) {
            if (value !== req.body.confirmNewPassword) {
                throw new Error('New passwords do not match.');
            } else {
                return true;
            }
        }),

    // Sanitize input.
    sanitizeBody('oldPassword').escape(),
    sanitizeBody('newPassword').escape(),
    sanitizeBody('confirmNewPassword').escape(),


    // Handle request.
    async function (req, res, next) {
        const errors = validationResult(req);

        const oldPassword = req.body.oldPassword;
        const newPassword = req.body.newPassword;

        // If form fields have validation errors.
        if (!errors.isEmpty()) {
            return res.status(400).send({errors: errors.array()});
        }

        const usersRepo = connection.getRepository('Users');

        const user = await usersRepo.findOne({id: req.session.userId});

        const passwordsMatch = await bcrypt.compare(oldPassword, user.password);

        if (!passwordsMatch) {
            return res.status(400).send({
                errors: [{
                    value: "",
                    msg: "Old password is incorrect.",
                    param: "oldPassword",
                    location: "body"
                }]
            });
        }

        user.password = await bcrypt.hash(newPassword, 10);

        await usersRepo.save(user);

        delete user['password'];

        res.send("Password updated.");
    }
];
