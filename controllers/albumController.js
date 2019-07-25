const connection = require('typeorm').getConnection();

exports.album_detail_get = async function (req, res, next) {
	const albumId = parseInt(req.params.id);
	if (isNaN(albumId)) {
        return res.send({});
    }
    const album = await connection.getRepository('Albums').findOne({id: albumId});
    const tracks = await connection.getRepository('Tracks').createQueryBuilder("tracks")
    	.select("tracks")
    	.addSelect("Artists.artist_id.artist_name")
    	.leftJoin("tracks.artist_id", "Artists.artist_id")
	    .where("tracks.owner_id = :userId and tracks.album_id = :album_id", { userId: req.session.userId, album_id: albumId})
	    .getMany();
    if (album == null || tracks == null){
		return res.status(404)        // HTTP status 404: NotFound
		          .send({});
    }
    if (tracks.length <= 0){
		return res.status(404)        // HTTP status 404: NotFound
		          .send({});
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

exports.album_delete = async function (req, res, next) {
	const otherUserTracks = await connection.getRepository('Tracks').createQueryBuilder("tracks")
    	.select("tracks")
    	.where("tracks.owner_id != :userId", { userId: req.session.userId })
    	.andWhere("tracks.album_id = :id", { id: req.params.id })
    	.getMany();
    const thisUserTracks = await connection.getRepository('Tracks').createQueryBuilder("tracks")
    	.select("tracks")
    	.where("tracks.owner_id = :userId", { userId: req.session.userId })
    	.andWhere("tracks.album_id = :id", {id: req.params.id})
    	.getMany();
    if (otherUserTracks.length > 0){
    	res.status(403)
    	   .send("403 Forbidden");
    	return;
    }
    if(thisUserTracks.length <= 0){
    	res.status(404)
    	    .send("404 Not Found");
    	return;
    }
	await connection.getRepository('Tracks')
	    .createQueryBuilder()
	    .delete()
	    .from('Tracks')
	    .where("album_id = :id", {id: req.params.id})
	    .andWhere("owner_id = :userId", {userId: req.session.userId})
	    .execute();
	await connection.getRepository('Albums')
	    .createQueryBuilder()
	    .delete()
	    .from('Albums')
	    .where("id = :id", {id: req.params.id})
	    .execute();
	res.send("Success");
};