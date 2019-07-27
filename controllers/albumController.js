const connection = require('typeorm').getConnection();

exports.album_detail_get = async function (req, res, next) {
    const albumId = parseInt(req.params.id);
    if (isNaN(albumId)) {
        return res.send({});
    }
    const album = await connection.getRepository('Albums').findOne({id: albumId, owner_id: req.session.userId});
    const tracks = await connection.getRepository('Tracks')
        .createQueryBuilder('tracks')
        .select('tracks')
        .where('tracks.owner_id = :userId', {userId: req.session.userId})
        .andWhere('tracks.album_id = :albumId', {albumId: albumId})
        .addOrderBy("tracks.rank_in_album", "ASC")
        .getMany();
    if (album == null || tracks == null) {
        return res.status(404)        // HTTP status 404: NotFound
            .send({});
    }
    if (tracks.length <= 0) {
        return res.status(404)        // HTTP status 404: NotFound
            .send({});
    }

    res.send({
        title: album.title,
        artist_name: album.artist_name,
        artists: album.artists,
        published_on: album.published_on,
        language: album.language,
        genres: album.genres,
        cover_art_file_name: album.cover_art_file_name,
        tracks: tracks
    });
};

exports.album_delete = async function (req, res, next) {
    const albumId = parseInt(req.params.id);
    if (isNaN(albumId)) {
        return res.send({});
    }
    const otherUserTracks = await connection.getRepository('Tracks').createQueryBuilder("tracks")
        .select("tracks")
        .where("tracks.owner_id != :userId", {userId: req.session.userId})
        .andWhere("tracks.album_id = :id", {id: albumId})
        .getMany();
    const thisUserTracks = await connection.getRepository('Tracks').createQueryBuilder("tracks")
        .select("tracks")
        .where("tracks.owner_id = :userId", {userId: req.session.userId})
        .andWhere("tracks.album_id = :id", {id: albumId})
        .getMany();
    const thisUserAlbum = await connection.getRepository('Albums').findOne({id: albumId, owner_id: req.session.userId});
    if (otherUserTracks.length > 0) {
        return res.status(403)
            .send("404 Not Found");
    }
    if (thisUserTracks.length <= 0) {
        return res.status(404)
            .send("404 Not Found");
    }
    if (thisUserAlbum == null) {
        return res.status(404).send("404 Not Found");
    }
    await connection.getRepository('Tracks')
        .createQueryBuilder()
        .delete()
        .from('Tracks')
        .where("album_id = :id", {id: albumId})
        .andWhere("owner_id = :userId", {userId: req.session.userId})
        .execute();
    await connection.getRepository('Albums')
        .createQueryBuilder()
        .delete()
        .from('Albums')
        .where("id = :id", {id: albumId})
        .andWhere("owner_id = :userId", {userId: req.session.userId})
        .execute();
    res.send("Success");
};
