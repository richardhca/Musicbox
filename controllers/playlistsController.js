const connection = require('typeorm').getConnection();
const playlistUtilities = require('../utilities/playlistUtilities');


exports.playlists_get = async function (req, res, next) {
    const userId = req.session.userId;
    const playlistRepo = connection.getRepository('Playlists');

    // Get playlists owned by the user
    const userOwnedPlaylists = await playlistRepo
        .createQueryBuilder("playlist")
        .where("playlist.owner_id = :userId", {userId})
        .leftJoinAndSelect("playlist.playlist_tracks", "playlist_tracks")
        .leftJoinAndSelect("playlist_tracks.track_id", "track")
        .getMany();

    // Get playlists shared with the user
    const userSharedPlaylists = await playlistRepo
        .createQueryBuilder("playlist")
        .innerJoinAndSelect("playlist.shared", "shared")
        .leftJoinAndSelect("shared.shared_with", "shared_with")
        .leftJoinAndSelect("playlist.playlist_tracks", "playlist_tracks")
        .leftJoinAndSelect("playlist_tracks.track_id", "track")
        .where("shared.shared_with = :userId", {userId: userId})
        .getMany();

    // Add field indicating that these playlists are not shared
    userOwnedPlaylists.forEach(playlist => {
        playlistUtilities.addCoverArtFromTracks(playlist);
        playlistUtilities.setShareStatuses(playlist, userId);
        delete playlist['playlist_tracks'];
    });

    // Add field indicating that these playlists are shared
    userSharedPlaylists.forEach(playlist => {
        playlistUtilities.addCoverArtFromTracks(playlist);
        playlistUtilities.setShareStatuses(playlist, userId);
        delete playlist['playlist_tracks'];
    });

    res.send({playlists: (userOwnedPlaylists || []).concat(userSharedPlaylists || [])});
};

