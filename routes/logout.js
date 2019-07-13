const express = require('express');
const router = express.Router();


const logout_controller = require('../controllers/logoutController');

router.get('/', logout_controller.logout_get);

// router.get('/', function (req, res, next) {
//   if (req.session) {
//     // delete session object
//     req.session.destroy(function (err) {
//       if (err) {
//         return next(err);
//       } else {
//         return res.redirect('/');
//       }
//     });
//   }
// });

module.exports = router;
