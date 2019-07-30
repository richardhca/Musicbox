const connection = require('typeorm').getConnection();

// TODO: Hacky solution. Try to figure out a better one if time permits.
const addCoverArtAndRemoveTracks = function (playlist) {
    playlist.cover_art_file_name = null;
    playlist.num_tracks = 0;
    if (playlist.playlist_tracks && playlist.playlist_tracks.length > 0) {
        playlist.num_tracks = playlist.playlist_tracks.length;
        for (var i = 0; i < playlist.playlist_tracks.length; i++) {
            if (playlist.playlist_tracks[i].track_id.cover_art_file_name) {
                playlist.cover_art_file_name = playlist.playlist_tracks[i].track_id.cover_art_file_name;
                break;
            }
        }
    }
    delete playlist['playlist_tracks'];
};

const setShareStatuses = function (playlist, userId) {
    const shares = playlist.shared;
    if (shares && shares.length > 0) {
        for (var i = 0; i < shares.length; i++) {
            if (shares[i].shared_with.id === userId) {
                playlist['share_id'] = shares[i].id;
                playlist['is_accepted'] = shares[i].is_accepted;
                return
            }
        }
    }
    playlist['share_id'] = null;
    playlist['is_accepted'] = false;
    return false;
};

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
        addCoverArtAndRemoveTracks(playlist);
        setShareStatuses(playlist, userId);
    });

    // Add field indicating that these playlists are shared
    userSharedPlaylists.forEach(playlist => {
        addCoverArtAndRemoveTracks(playlist);
        setShareStatuses(playlist, userId);
        delete playlist['shared'];
    });

    res.send({playlists: (userOwnedPlaylists || []).concat(userSharedPlaylists || [])});
};

