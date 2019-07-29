const connection = require('typeorm').getConnection();

const getHighestTrackRank = function (album) {
    var maxRank = 0;
    album.tracks.forEach(track => {
        maxRank = Math.max(maxRank, track.rank_in_album)
    });
    return maxRank;
};

// Primarily used to update album cover art when one if its tracks gets deleted
const updateAlbumCover = async function (album, deletedCoverArt) {

    // If there is an album
    if (album && album.id) {

        // if album has cover art and it's equal to the deleted one
        if (album.cover_art_file_name && album.cover_art_file_name === deletedCoverArt) {
            const albumRepo = connection.getRepository('Albums');
            album = await albumRepo.findOne({id: album.id}, {relations: ['tracks']});
            album.cover_art_file_name = null;
            for (var i = 0; i < album.tracks.length; i++) {
                if (album.tracks[i].cover_art_file_name) {
                    album.cover_art_file_name = album.tracks[i].cover_art_file_name;
                    break;
                }
            }
            await albumRepo.save(album);
        }
    }
};

module.exports = {
    getHighestTrackRank: getHighestTrackRank,
    updateAlbumCover: updateAlbumCover,
};
