const connection = require('typeorm').getConnection();
const trackDurationParser = require('../utilities/trackDurationParser.js');

exports.tracks_get = async function (req, res, next) {
    const userId = req.session.userId;
    // TODO: Figure out why using .find() doesn't with with the relations option here. (if time permits)
    const tracks = await connection.getRepository('Tracks')
        .createQueryBuilder("track")
        .where("track.owner_id = :userId", {userId})
        .leftJoinAndSelect("track.album_id", "album_id")
        .getMany();
    var track;
    for (track of tracks) {
        track.duration = trackDurationParser.durationParser(track.duration);
    }
    res.send({tracks: tracks});
};


