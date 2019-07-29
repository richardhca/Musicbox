const getHighestTrackRank = function (album) {
    var maxRank = 0;
    album.tracks.forEach(track => {
        maxRank = Math.max(maxRank, track.rank_in_album)
    });
    return maxRank;
};


module.exports = {
    getHighestTrackRank: getHighestTrackRank,
};
