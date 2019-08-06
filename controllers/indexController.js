const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');
const connection = require('typeorm').getConnection();
const bcrypt = require('bcrypt');

exports.index_get = function (req, res, next) {
    res.redirect('/track');
};