const path = require('path');
const pug = require('pug');
const connection = require('typeorm').getConnection();

exports.playlist_valid = (req, res, next) => {

};

exports.playlist_detail = async (req, res, next) => {
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
    } else {
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
    } else {
        console.log('server receive a empty req');
        res.render('index',
            {
                page: 'playlist_create', title: 'this is playlist'
                    + ' create page'
            });
    }
};

// playlist -> playlist_tracks -> tracks TO playlist -> tracks
const transformPlaylistTracks = function (playlist) {
    const tracks = [];
    playlist.playlist_tracks.forEach(playlistTrack => {
        const track = playlistTrack.track_id;
        track.rank_in_playlist = playlistTrack.rank;
        tracks.push(track);
    });
    playlist.tracks = tracks;
    delete playlist.playlist_tracks;
    playlist.tracks.sort((a, b) => a.rank_in_playlist - b.rank_in_playlist);
};

exports.playlist_details_get = async function (req, res, next) {

    // Get playlist and load its tracks
    const playlist = await connection.getRepository("Playlists").findOne(
        {
            playlist_id: req.params.id,
            owner_id: req.session.userId
        },
        {
            relations: ['playlist_tracks'],
        }
    );

    if (!playlist) {
        return res.status(404).send();
    }

    transformPlaylistTracks(playlist);

    res.send(playlist);
};

// TODO: Make sure this works and possibly use query string params instead of body params
exports.playlist_modify_post = async function (req, res, next) {
    const playlist = await connection.getRepository("Playlists").findOne({
        playlist_id: req.body.playlistId,
        owner_id: req.session.userId
    });
    const track_record = await connection.getRepository("Playlist_to_track").findOne({
        playlist_id: req.body.playlistId,
        track_id: req.body.updateId
    });
    console.log(track_record);
    var newRank = null;
    if (playlist == null || track_record == null) {
        return res.status(404).send("404 Not Found");
    }//If no playlist found, return 404
    //handle the two cases where there is no tracks before or after the track (i.e. move to the top or bottom of the playlist)
    if (req.body.beforeId == -1) { //If beforeId in the request is -1, that means no track should be before this track (i.e. top of the playlist). Please set the afterId to anything that is not -1
        const smallestRank = await connection.getRepository("Playlists")
            .createQueryBuilder("Playlist_to_track")
            .select("MIN(Playlist_to_track.rank)")
            .from("playlist_to_track")
            .where("playlist_to_track.playlist_id = :playlistId", {playlistId: req.body.playlistId})
            .getRawOne();
        if (track_record.rank == smallestRank.min) {
            return res.send("Success");
        }
        newRank = smallestRank.min / 2;
    } else if (req.body.afterId == -1) { //If beforeId in the request is -1, that means no track should be after this track (i.e. bottom of the playlist). Please set the beforeId to anything that is not -1
        const largestRank = await connection.getRepository("Playlists")
            .createQueryBuilder("Playlist_to_track")
            .select("MAX(Playlist_to_track.rank)")
            .from("playlist_to_track")
            .where("playlist_to_track.playlist_id = :playlistId", {playlistId: req.body.playlistId})
            .getRawOne();
        if (track_record.rank == largestRank.max) {//if the current track is already at the bottom of the playlist. do nothing.
            return res.send("Success");
        }
        newRank = largestRank.max + 1;
    } else { //If nothing else, put the track between the track indicated in beforeId and afterId
        const trackBefore = await connection.getRepository("Playlist_to_track").findOne({
            playlist_id: req.body.playlistId,
            track_id: req.body.beforeId
        });
        const trackAfter = await connection.getRepository("Playlist_to_track").findOne({
            playlist_id: req.body.playlistId,
            track_id: req.body.afterId
        });
        newRank = (trackBefore.rank + trackAfter.rank) / 2;
    }

    await connection.getRepository("Playlist_to_track")
        .createQueryBuilder("Playlist_to_track")
        .update("Playlist_to_track")
        .set({rank: newRank})
        .where("track_id = :updateId", {updateId: req.body.updateId})
        .andWhere("playlist_id = :playlistId", {playlistId: req.body.playlistId})
        .execute();
    return res.send("Success");

};
