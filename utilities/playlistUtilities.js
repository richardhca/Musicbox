const trackDurationParser = require('./trackDurationParser');


// playlist -> playlist_tracks -> tracks TO playlist -> tracks
const transformPlaylistTracks = function (playlist) {
    const tracks = [];
    playlist.playlist_tracks.forEach(playlistTrack => {
        const track = playlistTrack.track_id;
        if (track) {
            track.rank_in_playlist = playlistTrack.rank;
            track.duration = trackDurationParser.durationParser(track.duration);
            delete track['owner_id'];
            tracks.push(track);
        }
    });
    playlist.tracks = tracks;
    delete playlist.playlist_tracks;
    playlist.tracks.sort((a, b) => a.rank_in_playlist - b.rank_in_playlist);
};

const getHighestTrackRank = function (playlist) {
    var maxRank = 0;
    playlist.playlist_tracks.forEach(playlistTrack => {
        maxRank = Math.max(maxRank, playlistTrack.rank)
    });
    return maxRank;
};

// TODO: Hacky solution. Try to figure out a better one if time permits.
const addCoverArtFromTracks = function (playlist) {
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
};

const setShareStatuses = function (playlist, userId) {
    const shares = playlist.shared;
    if (shares && shares.length > 0) {
        for (var i = 0; i < shares.length; i++) {
            if (shares[i].shared_with.id === userId) {
                playlist['share_id'] = shares[i].id;
                playlist['is_accepted'] = shares[i].is_accepted;
                delete playlist['shared'];
                return
            }
        }
    }
    playlist['share_id'] = null;
    playlist['is_accepted'] = false;
    delete playlist['shared'];
};

const userHasAccess = function (playlist, userId) {
    if (playlist.owner_id.id === userId) {
        return true
    }

    if (playlist.shared && playlist.shared.length > 0) {
        for (var i = 0; i < playlist.shared.length; i++) {
            if (playlist.shared[i].shared_with.id === userId) {
                return true;
            }
        }
    }
    return false
};

module.exports = {
    transformPlaylistTracks: transformPlaylistTracks,
    getHighestTrackRank: getHighestTrackRank,
    addCoverArtFromTracks: addCoverArtFromTracks,
    setShareStatuses: setShareStatuses,
    userHasAccess: userHasAccess
};
