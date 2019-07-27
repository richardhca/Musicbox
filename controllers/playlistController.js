const path = require('path');
const pug = require('pug');
const connection = require('typeorm').getConnection();

exports.playlist_detail = async function (req, res, next) {
    const info = req.query.info;
    const type = req.query.type;
    const playlists = await connection.getRepository('Playlists').find({owner_id: req.session.userId});
    console.log(req.session.userId);
    console.log(playlists);
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_playlist_detail_tool_bar = path.join(__dirname,
                                                     '../views/playlist_tool_bar.pug');
        const fn_playlist_detail_tool_bar = pug.compileFile(
            p_playlist_detail_tool_bar, null);
        const p_playlist_detail = path.join(__dirname,
                                            '../views/playlist_detail.pug');
        const fn_playlist_detail = pug.compileFile(p_playlist_detail, null);

        const image_path = path.join(__dirname,
                                     '../public/images/test.png');

        const html = fn_playlist_detail_tool_bar() + fn_playlist_detail(
            {path: image_path});
        // console.log(html);



        res.send(html);
    }
    else {
        console.log('server receive a empty req');
        const image_path = path.join('../public/images/test.png');
        res.render('index',
                   {page: 'playlist_detail', path: image_path});
    }
};

exports.playlist_create_get = (req, res, next) => {
    const info = req.query.info;
    const type = req.query.type;
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p = path.join(__dirname, '../views/playlist_create.pug');
        const fn = pug.compileFile(p, null);
        const html = fn({title: 'this is playlist create page'});
        console.log(html);

        res.send(html);
    }
    else {
        console.log('server receive a empty req');
        res.render('index',
                   {
                       page: 'playlist_create', title: 'this is playlist'
                                                       + ' create page'
                   });
    }
};

exports.playlist_details_get = async function (req, res, next) {
	const playlist = await connection.getRepository("Playlists").findOne({playlist_id: req.params.id, owner_id: req.session.userId});
	if (playlist==null){
		return res.status(404).send("404 Not Found");
	}
    const tracks = await connection.getRepository("Playlists")
        .createQueryBuilder("playlists")
        .select("tracks")
        .leftJoin("playlist_to_track", "playlist_to_track", "playlist_to_track.playlist_id = playlists.playlist_id")
        .leftJoin("tracks", "tracks", "playlist_to_track.track_id = tracks.id")
        .where("playlists.owner_id = :userId", {userId: req.session.userId})
        .andWhere("playlists.playlist_id = :id", {id: req.params.id})
        .andWhere("tracks.owner_id = :userId", {userId: req.session.userId})
        .addOrderBy("playlist_to_track.rank", "ASC")
        .getRawMany();
    res.send({name: playlist.name, tracks: tracks});
};

exports.playlist_modify_post = async function (req, res, next) {
	console.log(req.body.playlistId);
	console.log(req.body.beforeId);
	console.log(req.body.updateId);
	console.log(req.body.afterId);
	const playlist = await connection.getRepository("Playlists").findOne({playlist_id: req.body.playlistId, owner_id: req.session.userId});
	var newRank = null;
	if (playlist == null){
		return res.status(404).send("404 Not Found");
	}
	if(req.body.beforeId == -1){
		const trackBefore = await connection.getRepository("Playlist_to_track").findOne({playlist_id: req.body.playlistId, track_id: req.body.beforeId});
		newRank = trackBefore.rank / 2;
	}
	else if(req.body.afterId == -1){
		const trackAfter = await connection.getRepository("Playlist_to_track").findOne({playlist_id: req.body.playlistId, track_id: req.body.afterId});
		newRank = trackAfter.rank + 1;
	}
	else {
		const trackBefore = await connection.getRepository("Playlist_to_track").findOne({playlist_id: req.body.playlistId, track_id: req.body.beforeId});
		const trackAfter = await connection.getRepository("Playlist_to_track").findOne({playlist_id: req.body.playlistId, track_id: req.body.afterId});
		newRank = (trackBefore.rank+trackAfter.rank)/2;
	}
	
	await connection.getRepository("Playlist_to_track")
	    .createQueryBuilder("Playlist_to_track")
	    .update("Playlist_to_track")
	    .set({rank:newRank})
	    .where("track_id = :updateId", {updateId: req.body.updateId})
	    .andWhere("playlist_id = :playlistId", {playlistId: req.body.playlistId})
	    .execute();
	return res.send("Success");

}