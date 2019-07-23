const connection = require('typeorm').getConnection();

exports.tracks_get = async function (req, res, next) {
    const tracks = await connection.getRepository('Tracks').find({owner_id: req.session.userId});
    res.send({tracks: tracks});
};
