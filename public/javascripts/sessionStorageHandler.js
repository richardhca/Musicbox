const FuzzySearch = require('fuzzy-search');
const pug = require('pug');

var tracks;

function format_tracks_data(data) {
    var jsonData = [];
    data.tracks.forEach(track => {
        jsonData.push({
            id: track.id,
            title: track.title,
            album_id: {
                title: track.album_id.title
            },
            artists: track.artists,
            genres: track.genres,
            duration: track.duration,
            file_name: '/tracks/' + track.file_name,
            cover_art_file_name: '/covers/' + track.cover_art_file_name
        });
    });
    // console.log(jsonData);
    return jsonData;
}

exports.insert_tracks = function (data) {
    const formatted_tracks = format_tracks_data(data);
    sessionStorage.setItem('tracks', JSON.stringify(formatted_tracks));
    tracks = formatted_tracks;
};

exports.get_tracks = function () {
    return JSON.parse(sessionStorage.getItem('tracks'));
};

exports.get_searched_tracks = function (char) {
    const searcher = new FuzzySearch(tracks, ['title', 'artists', 'album_id.title'], {
        caseSensitive: false,
    });
    return searcher.search(char);

};




