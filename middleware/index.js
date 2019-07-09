
// If user is logged in, redirect to home page.
function loggedOut(req, res, next) {
  if (req.session && req.session.userId) {
    return res.redirect('/');
  }
  return next();
}
function requiresLogin(req, res, next) {
  // If user is logged in
  if (req.session && req.session.userId) {
    // Do nothing
    return next();
  } else {
    // Ask user to login
    return res.render('login', {title: 'Login', errors: [{msg: 'Login required.'}]});
  }
}
module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;
