const connection = require('typeorm').getConnection();

exports.albums_get = async function (req, res, next) {
    const albums = await connection.getRepository('Albums').find({owner_id: req.session.userId});
    res.send({albums: albums});
};
