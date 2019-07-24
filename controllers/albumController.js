const connection = require('typeorm').getConnection();

exports.album_detail_get = async function (req, res, next) {
    const album = await connection.getRepository('Albums').findOne({id: req.params.id});
    const tracks = await connection.getRepository('Tracks').createQueryBuilder("tracks")
    	.select("tracks")
    	.addSelect("Artists.artist_id.artist_name")
    	.leftJoin("tracks.artist_id", "Artists.artist_id")
	    .where("tracks.owner_id = :userId and tracks.album_id = :album_id", { userId: req.session.userId, album_id: req.params.id})
	    .getMany();
    if (album == null || tracks == null){
		res.status(404)        // HTTP status 404: NotFound
		   .send({});
    	return;
    }
    if (tracks.length <= 0){
		res.status(404)        // HTTP status 404: NotFound
		   .send({});
    	return;
    }
    let artistSet = new Set();
    for (var track, i = 0; track=tracks[i++];) {
    	if(track.artist_id != null){
    		artistSet.add(track.artist_id.artist_name);
    	}
    }
    artists = Array.from(artistSet);
    res.send({title: album.title, published_on: album.published_on, language: album.language, genres: album.genres, artists: artists, cover: album.cover, tracks: tracks});
};
