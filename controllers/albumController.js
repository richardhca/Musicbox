const connection = require('typeorm').getConnection();

exports.album_detail_get = async function (req, res, next) {
    const album = await connection.getRepository('Albums').findOne({id: req.params.id});
    if (album == null){
		res.status(404)        // HTTP status 404: NotFound
		   .send('Not found');
    	return;
    }
    const tracks = await connection.getRepository('Tracks').find({album_id: req.params.id, owner_id: req.session.userId});
    let artistSet = new Set();
    for (var track, i = 0; track=tracks[i++];) {
    	artistSet.add(track.title);
    }
    artists = Array.from(artistSet);
    res.send({title: album.title, published_on: album.published_on, language: album.language, genres: album.genres, artists: artists, cover: album.cover, tracks: tracks});
};
