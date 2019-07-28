// playlist -> playlist_tracks -> tracks TO playlist -> tracks
const transformPlaylistTracks = function (playlist) {
    const tracks = [];
    playlist.playlist_tracks.forEach(playlistTrack => {
        const track = playlistTrack.track_id;
        if (track) {
            track.rank_in_playlist = playlistTrack.rank;
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

module.exports = {
    transformPlaylistTracks: transformPlaylistTracks,
    getHighestTrackRank: getHighestTrackRank,
};
