const path = require('path');
const pug = require('pug');
const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');
const connection = require('typeorm').getConnection();
const playlistUtilities = require('../utilities/playlistUtilities');

exports.playlist_valid = async (req, res, next) => {
    const playlist_name = req.body.playlist_name;
    if (!playlist_name) {
        console.log('playlist name is empty.');
        //return res.render('');
    } else {
        const playlist_name_from_db = connection.getRepository('Playlists');
        const compare = await playlist_name_from_db.findOne(playlist_name);
        if (compare) {
            console.log('Invalid playlist name.');
            //res.render('');
        } else {
            console.log('Valid playlist name.');
            //res.render('');
        }
    }


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

    playlistUtilities.transformPlaylistTracks(playlist);

    res.send(playlist);
};

exports.playlist_create_post = [

    // Validate fields.
    body('playlistname')
        .trim()
        .exists()
        .isLength({min: 3}).withMessage('Playlist name must be more than 2 characters.')
        .isLength({max: 25}).withMessage('Playlist name cannot be more than 25 characters.'),
    body('public')
        .exists(),

    // Sanitize input.
    sanitizeBody('playlistname').escape(),
    sanitizeBody('public').toBoolean(),

    // Handle request.
    async function (req, res, next) {

        const errors = validationResult(req);

        var playlistData = {
            title: req.body.playlistname,
            is_public: req.body.public,
            created_on: new Date(),
            owner_id: req.session.userId,
            playlist_tracks: []
        };

        // If form fields have validation errors.
        if (!errors.isEmpty()) {
            return res.status(400).send({errors: errors.array()});
        }

        const playlistRepository = connection.getRepository("Playlists");

        const playlist = await playlistRepository.save(playlistData);

        res.send(playlist);
    }
];


exports.playlist_add_post = async function (req, res, next) {

    const playlistId = req.params.playlistId;
    var trackIds = req.query.ids;

    // 404 if either was not provided
    if (!playlistId || !trackIds) {
        return res.status(404).send("Playlist or track can't be found");
    }

    // Load playlist and track
    const playlistRepo = connection.getRepository('Playlists');
    const playlist = await playlistRepo.findOne(
        {
            playlist_id: playlistId,
            owner_id: req.session.userId
        },
        {
            relations: ['playlist_tracks']
        }
    );

    // 404 if playlist doesn't exist
    if (!playlist) {
        res.status(404).send("Playlist can't be found");
    }

    trackIds = trackIds.split(",");

    // Add tracks to playlist
    for (var i = 0; i < trackIds.length; i++) {
        const track = await connection.getRepository('Tracks').findOne({id: trackIds[i], owner_id: req.session.userId});
        if (!track) {
            return res.status(404).send(`Track Id ${trackIds[i]} could not be found`);
        }
        // Add track to playlist with correct rank
        playlist.playlist_tracks.push({
            rank: playlistUtilities.getHighestTrackRank(playlist) + 1,
            track_id: track,
        });
    }

    // Save updated playlist
    await playlistRepo.save(playlist);

    playlistUtilities.transformPlaylistTracks(playlist);

    res.send(playlist);

};

exports.playlist_tracks_delete = async function (req, res, next) {
    const playlistId = req.params.playlistId;
    var ranks = req.query.ranks;

    // 404 if either was not provided
    if (!playlistId || !ranks) {
        res.status(404).send("Playlist or tracks can't be found");
    }

    // Split into array
    ranks = ranks.split(",");

    const playlistRepo = connection.getRepository('Playlists');
    const playlist = await playlistRepo.findOne(
        {
            playlist_id: playlistId,
            owner_id: req.session.userId
        },
        {
            relations: ['playlist_tracks']
        }
    );

    // 404 if playlist does not exist
    if (!playlist) {
        return res.status(404).send("Playlist can't be found");
    }

    playlist.playlist_tracks = playlist.playlist_tracks.filter(pt => !ranks.includes(pt.rank.toString()));

    await playlistRepo.save(playlist);

    playlistUtilities.transformPlaylistTracks(playlist);

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
