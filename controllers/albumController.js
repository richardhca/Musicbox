const connection = require('typeorm').getConnection();

exports.album_detail_get = async function (req, res, next) {
    const albumId = parseInt(req.params.id);

    if (isNaN(albumId)) {
        return res.status(404).send();
    }

    const album = await connection.getRepository('Albums').findOne(
        {id: albumId, owner_id: req.session.userId},
        {relations: ['tracks']},
    );

    if (album == null) {
        // HTTP status 404: NotFound
        return res.status(404).send();
    }

    // Sort tracks ASC by rank in album
    album.tracks.sort((a, b) => a.rank_in_album - b.rank_in_album);

    res.send(album);
};

exports.album_delete = async function (req, res, next) {
    const albumId = parseInt(req.params.id);

    if (isNaN(albumId)) {
        return res.status(404).send("Delete failed.");
    }

    const albumsRepo = connection.getRepository('Albums');
    const album = await albumsRepo.findOne({id: albumId, owner_id: req.session.userId});

    if (!album) {
        return res.status(404).send("Delete failed.");
    }

    await albumsRepo.remove(album);

    res.send("Delete successful.");
};
