const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');
const connection = require('typeorm').getConnection();
const bcrypt = require('bcrypt');

//compare old passward with new one, implement it if possible.
exports.change_profile_post = [
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
            password: await bcrypt.hash(req.body.password, 10),
            date_of_birth: req.body.date_of_birth,
    };

    await connection.getRepository("Users")
        .createQueryBuilder("Users")
        .update("Users")
        .set({newUserData})
        .where("id = :id", {id: req.session.userId})
        .execute();
    //return res.send("Success");
    if(errors){
        var errMessage;
        if (error.code === "23505") {
            if (error.detail.includes('email')) {
                errMessage = `Email address "${req.body.email}" is already taken.`;
            } else {
                errMessage = `Username "${req.body.username}" is already taken.`;
            }
            return res.render('register_form', {user: newUserData, errors: [{msg: errMessage}]});
        }
        // Other database errors are just handled by the error handler middleware in app.js
         var err = new Error();
         err.status = 503;
         return next(err);   
    }
    res.redirect('/');
    

    /*
        var newUserData = {
            username: req.body.username,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            date_of_birth: req.body.date_of_birth,
            creation_date: new Date(),
        };
    */
        // If form fields have validation errors.
        /*
        if (!errors.isEmpty()) {
            return res.render('register_form', {user: newUserData, errors: errors.array()});
        }
        */
       /*
        const userRepository = connection.getRepository("Users");
        userRepository.save(newUserData)
            .then(function (user) {
                // If all goes well.
                req.session.userId = user.id;
                req.session.isLoggedIn = true;
                req.session.emailConfirmed = user.emailConfirmed;
                res.redirect('/');
            })
            */
            /*
            .catch(function (error) {
                // If one of the unique fields already exists.
                // Error code "23505" means duplicate unique key constraint was violated.
                
                var errMessage;
                if (error.code === "23505") {
                    if (error.detail.includes('email')) {
                        errMessage = `Email address "${req.body.email}" is already taken.`;
                    } else {
                        errMessage = `Username "${req.body.username}" is already taken.`;
                    }
                    return res.render('register_form', {user: newUserData, errors: [{msg: errMessage}]});
                }
                // Other database errors are just handled by the error handler middleware in app.js
                var err = new Error();
                err.status = 503;
                return next(err);
            });
            */
    }
];
