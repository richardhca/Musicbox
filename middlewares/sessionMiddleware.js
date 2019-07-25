exports.isLoggedIn = function (req, res, next) {
    res.locals.isLoggedIn = req.session.userId && req.session.isLoggedIn;
    // console.log(res.locals.isLoggedIn);
    next();
};

exports.requiredLogin = function (req, res, next) {
    if (req.session.userId && req.session.isLoggedIn) {
        console.log('Already login');
        const original_url = req.originalUrl;
        if (original_url === '/login' || original_url === '/register') {
            res.redirect('/');
        } else {
            console.error('Required login');
            next();
        }
    } else {
        const original_url = req.originalUrl;
        if (original_url === '/login' || original_url === '/register') {
            next();
        } else {
            console.error('Required login');
            res.redirect('/login');
        }
    }
};

// // If user is logged in, redirect to home page.
// function loggedOut(req, res, next) {
//   if (req.session && req.session.userId) {
//     return res.redirect('/');
//   }
//   return next();
// }
// function requiresLogin(req, res, next) {
//   // If user is logged in
//   if (req.session && req.session.userId) {
//     // Do nothing
//     return next();
//   } else {
//     // Ask user to login
//     return res.render('login', {title: 'Login', errors: [{msg: 'Login
// required.'}]}); } } module.exports.loggedOut = loggedOut;
// module.exports.requiresLogin = requiresLogin;
