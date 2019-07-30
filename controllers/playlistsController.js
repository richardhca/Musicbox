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

const getShareAcceptStatus = function (shares, userId) {
    if (shares && shares.length > 0) {
        for (var i = 0; i < shares.length; i++) {
            if (shares[i].shared_with.id === userId) {
                return shares[i].is_accepted;
            }
        }
    }
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
        playlist['is_shared'] = false;
        playlist['is_accepted'] = false;
        addCoverArtAndRemoveTracks(playlist);
    });

    // Add field indicating that these playlists are shared
    userSharedPlaylists.forEach(playlist => {
        playlist['is_shared'] = true;
        playlist['is_accepted'] = getShareAcceptStatus(playlist.shared, userId);
        delete playlist['shared'];
        addCoverArtAndRemoveTracks(playlist);
    });

    res.send({playlists: (userOwnedPlaylists || []).concat(userSharedPlaylists || [])});
};

