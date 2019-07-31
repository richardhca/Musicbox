const connection = require('typeorm').getConnection();

exports.profile_get = async function (req, res, next) {
    const profile = await connection.getRepository('Users').findOne({id: req.session.userId});
    delete profile['password'];
    res.send(profile);
};



