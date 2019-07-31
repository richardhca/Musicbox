const connection = require('typeorm').getConnection();
const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');

exports.profile_get = async function (req, res, next) {
    const profile = await connection.getRepository('Users').findOne({id: req.session.userId});
    delete profile['password'];
    res.send(profile);
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

        const userRepo = connection.getRepository('Users');
        var user = await userRepo.findOne({id: req.session.userId});

        // Merge new data (new fields replace old ones)
        user = Object.assign(user, newUserData);
        await userRepo.save(user);

        res.send(user);
    }
];


