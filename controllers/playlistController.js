const path = require('path');
const pug = require('pug');
const validator = require('validator');
const fs = require('fs');
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

exports.playlist_page_get = async (req, res, next) => {
    const info = req.query.info;
    const type = req.query.type;

    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_playlist_page_tool_bar = path.join(__dirname,
            '../views/playlist_page_tool_bar.pug');
        const fn_playlist_page_tool_bar = pug.compileFile(
            p_playlist_page_tool_bar, null);
        const p_playlist_page = path.join(__dirname,
            '../views/playlist_page.pug');
        const fn_playlist_page = pug.compileFile(p_playlist_page, null);

        const image_path = path.join(__dirname,
            '../public/images/test.png');

        const html = fn_playlist_page_tool_bar() + fn_playlist_page(
            {path: image_path});
        // console.log(html);

        res.send(html);
    } else {
        console.log('server receive a empty req');
        const image_path = path.join('../public/images/test.png');
        res.render('index',
            {page: 'playlist_page_get', path: image_path});
    }
};

//test
exports.playlist_detail_get = function (req, res, next) {

    const info = req.query.info;
    const type = req.query.type;

    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_playlist_detail_tool_bar = path.join(__dirname,
            '../views/playlist_detail_tool_bar.pug');
        const fn_playlist_detail_tool_bar = pug.compileFile(
            p_playlist_detail_tool_bar, null);

        const p_playlist_detail = path.join(__dirname,
            '../views/playlist_detail.pug');
        const fn_playlist_detail = pug.compileFile(p_playlist_detail, null);

        const html = fn_playlist_detail_tool_bar() + fn_playlist_detail();
        // console.log(html);
        res.send(html);
    } else {
        console.log('server receive a empty req: /playlist/detail');
        res.render('index',
            {page: 'playlist_detail_get'});
    }

};

exports.playlist_delete = async function (req, res, next) {
    const userId = req.session.userId;
    const playlistId = req.params.playlistId;

    // 404 if playlistId is not provided or is not UUID
    if (!playlistId || !validator.isUUID(playlistId)) {
        return res.status(404).send("Playlist can't be found");
    }

    const playlistRepo = connection.getRepository("Playlists");
    const playlist = await playlistRepo.findOne(
        {
            playlist_id: playlistId,
            owner_id: userId
        }
    );

    if (!playlist) {
        return res.status(404).send("Playlist can't be found");
    }

    await playlistRepo.remove(playlist);
    res.send("Playlist deleted.");
};

exports.playlist_details_get = async function (req, res, next) {
    const userId = req.session.userId;
    const playlistId = req.params.id;

    // 404 if playlistId is not provided or is not UUID
    if (!playlistId || !validator.isUUID(playlistId)) {
        return res.status(404).send("Playlist can't be found");
    }

    // Get playlist and load its tracks
    const playlist = await connection.getRepository("Playlists").findOne(
        {
            playlist_id: playlistId
        },
        {
            relations: ['owner_id', 'playlist_tracks', 'shared', 'shared.shared_with'],
        }
    );

    if (!playlist) {
        return res.status(404).send();
    }

    if (!playlistUtilities.userHasAccess(playlist, userId)) {
        return res.status(403).send();
    }

    playlistUtilities.addCoverArtFromTracks(playlist);
    playlistUtilities.setShareStatuses(playlist, userId);
    playlistUtilities.transformPlaylistTracks(playlist);
    delete playlist['owner_id'];

    res.send(playlist);
};

exports.playlist_create_post = [

    // Validate fields.
    body('PlaylistName')
        .trim()
        .exists()
        .isLength({min: 3}).withMessage('Playlist name must be more than 2 characters.')
        .isLength({max: 25}).withMessage('Playlist name cannot be more than 25 characters.'),

    // Sanitize input.
    sanitizeBody('PlaylistName').escape(),

    // Handle request.
    async function (req, res, next) {
        const errors = validationResult(req);

        var playlistData = {
            title: req.body.PlaylistName,
            is_public: false,
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
        delete playlist['owner_id'];

        res.send(playlist);
    }
];


exports.playlist_add_post = async function (req, res, next) {

    const playlistId = req.params.playlistId;
    var trackIds = req.query.ids;

    // 404 if either was not provided or playlistId is not UUID
    if (!playlistId || !trackIds || !validator.isUUID(playlistId)) {
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
        return res.status(404).send("Playlist can't be found");
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

    // 404 if either was not provided or playlistId is not UUID
    if (!playlistId || !ranks || !validator.isUUID(playlistId)) {
        return res.status(404).send("Playlist or tracks can't be found");
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

    const ptRepo = connection.getRepository('Playlist_to_track');

    // playlist_to_track records to remove based on rank within playlist
    const ptToRemove = [];

    // Filter filter and collect player_to_track records to be deleted
    playlist.playlist_tracks = playlist.playlist_tracks.filter(pt => {
        if (ranks.includes(pt.rank.toString())) {
            ptToRemove.push(pt);
            return false
        }
        return true
    });

    // Delete player_to_track records from database
    ptToRemove.forEach(async (pt) => {
        await ptRepo.remove(pt);
    });

    await playlistRepo.save(playlist);

    res.send("Delete successful.");
};

exports.playlist_share_post = async function (req, res, next) {
    const destUser = req.body.destUser;
    const playlistId = req.params.playlistId;
    if (!destUser || !playlistId || !validator.isUUID(playlistId)) {
        return res.status(404).send("invalid input!");
    }
    var destUserObj = null;
    if (destUser.includes('@')) {
        destUserObj = await connection.getRepository('Users').findOne({email: destUser});
    } else {
        destUserObj = await connection.getRepository('Users').findOne({username: destUser});
    }
    if (destUserObj === null) {
        return res.status(404).send("Cannot find the user to share playlist with");
    }
    const destUserId = destUserObj.id;
    const playlist_to_share = await connection.getRepository('Playlists').findOne({
        playlist_id: playlistId,
        owner_id: req.session.userId
    });
    if (playlist_to_share === undefined) {
        return res.status(404).send("Cannot find the specified playlist");
    }
    if (destUserId === req.session.userId) {
        return res.status(403).send("Cannot share playlists to the same person");
    }
    const checkRec = await connection.getRepository('Shared_playlist').findOne({
        playlist_id: playlistId,
        shared_with: destUserId
    });
    if (checkRec != null) {
        return res.send('Repeat record exist. Do nothing.');
    }
    await connection.getRepository('Shared_playlist')
        .createQueryBuilder('Shared_playlist')
        .insert()
        .into('shared_playlist')
        .values([
            {
                shared_on: new Date(),
                is_accepted: true,
                shared_with: destUserId,
                playlist_id: playlistId
            }
        ])
        .execute();
    return res.send("Success");
};

exports.playlist_share_delete = async function (req, res, next) {
    const shareId = req.params.shareId;

    if (!shareId) {
        return res.status(404).send("Shared playlist not found.");
    }

    const sharesRepo = connection.getRepository('Shared_playlist');
    const share = await sharesRepo.findOne(
        {id: shareId},
        {relations: ['shared_with', 'playlist_id', 'playlist_id.owner_id']}
    );

    if (!share) {
        return res.status(404).send("Shared playlist not found.");
    }

    // If user is recipient of share, then allow user to accept share
    if (share.playlist_id.owner_id.id === req.session.userId || share.shared_with.id === req.session.userId) {
        await sharesRepo.remove(share);
        res.send("Playlist unshared.");
    } else {
        // Technically 403, but we'd rather not let users guess Ids to check if they exist.
        res.status(404).send("Shared playlist not found.");
    }
};

exports.playlist_share_put = async function (req, res, next) {
    const shareId = req.params.shareId;

    if (!shareId) {
        return res.status(404).send("Shared playlist not found.");
    }

    const sharesRepo = connection.getRepository('Shared_playlist');
    const share = await sharesRepo.findOne(
        {id: shareId},
        {relations: ['shared_with', 'playlist_id', 'playlist_id.owner_id']}
    );

    if (!share) {
        return res.status(404).send("Shared playlist not found.");
    }

    // If user is either owner of playlist or recipient of share, then allow user to delete share
    if (share.shared_with.id === req.session.userId) {
        share.is_accepted = true;
        await sharesRepo.save(share);
        res.send("Playlist share accepted.");
    } else {
        // Technically 403, but we'd rather not let users guess Ids to check if they exist.
        res.status(404).send("Shared playlist not found.");
    }
};

exports.playlist_shares_get = async function (req, res, next) {

    const playlistId = req.params.playlistId;

    if (!playlistId || !validator.isUUID(playlistId)) {
        return res.status(404).send("Playlist not found.");
    }

    const playlist = await connection.getRepository('Playlists').findOne(
        {
            playlist_id: playlistId,
            owner_id: req.session.userId
        },
        {
            relations: ['playlist_tracks', 'shared', 'shared.shared_with']
        }
    );

    playlistUtilities.addCoverArtFromTracks(playlist);
    delete playlist['playlist_tracks'];

    playlist.shared.forEach(share => {
        const shared_with = share.shared_with;
        share.shared_with = shared_with.username;
    });

    res.send(playlist);
};

// TODO: Make sure this works and possibly use query string params instead of body params
exports.playlist_modify_post = async function (req, res, next) {

    if (!req.body.playlistId || !validator.isUUID(req.body.playlistId)) {
        return res.status(404).send("Playlist can't be found");
    }

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

exports.playlist_rename_post = async function (req, res, next) {
    var playlistId = req.params.playlistId;
    if (!playlistId || !validator.isUUID(playlistId)) {
        return res.status(400).send("Playlist ID Incorrect!");
    }
    const playlist = connection.getRepository("Playlists").findOne({
        playlist_id: playlistId,
        owner_id: req.session.userId
    });
    if (playlist == null) {
        return res.status(404).send("Target Playlist not found!")
    }
    await connection.getRepository("Playlists")
        .createQueryBuilder("Playlists")
        .update("Playlists")
        .set({title: req.body.newTitle})
        .where("playlist_id = :playlistId", {playlistId: playlistId})
        .andWhere("owner_id = :userId", {userId: req.session.userId})
        .execute();
    return res.send("Success");
};
