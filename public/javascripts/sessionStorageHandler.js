const FuzzySearch = require('fuzzy-search');

var tracks;
var albums;
var playlists;

window.format_tracks_data = function (data) {
    var jsonData = [];
    data.tracks.forEach(track => {
        jsonData.push({
            id: track.id,
            title: track.title,
            album_id: {
                title: (null === track.album_id ? 'None' : track.album_id.title)
            },
            artists: track.artists,
            genres: track.genres,
            duration: track.duration,
            file_name: '/tracks/' + track.file_name,
            cover_art_file_name: '/covers/' + track.cover_art_file_name

        });
    });
    return jsonData;
};

window.format_aplayer_tracks_data = function (data) {
    var jsonData = [];
    data.tracks.forEach(track => {
        jsonData.push({
            id: track.id,
            name: track.title,
            artist: track.artists,
            url: track.file_name,
            cover: track.cover_art_file_name
        });
    });
    return jsonData;
};

window.format_albums_data = function (data) {
    var jsonData = [];
    data.albums.forEach(album => {
        jsonData.push({
            id: album.id,
            title: album.title,
            artists: album.artists,
            cover_art_file_name: album.cover_art_file_name
        });
    });
    return jsonData;
};

window.format_playlists_data = function (data) {
    var jsonData = [];
    data.playlists.forEach(playlist => {
        jsonData.push({
            playlist_id: playlist.playlist_id,
            title: playlist.title,
        });
    });
    return jsonData;
};

window.insert_tracks = function (data) {
    const formatted_tracks = format_tracks_data(data);
    sessionStorage.setItem('tracks', JSON.stringify(formatted_tracks));
    tracks = formatted_tracks;
};

window.get_tracks = function () {
    return JSON.parse(sessionStorage.getItem('tracks'));
};

window.get_searched_tracks = function (char) {
    const searcher = new FuzzySearch(tracks, ['title', 'artists', 'album_id.title'], {
        caseSensitive: false,
    });
    return searcher.search(char);
};

window.insert_albums = function (data) {
    const formatted_albums = format_albums_data(data);
    sessionStorage.setItem('albums', JSON.stringify(formatted_albums));
    albums = formatted_albums;
};

window.get_albums = function () {
    return JSON.parse(sessionStorage.getItem('albums'));
};

window.get_searched_albums = function (char) {
    const searcher = new FuzzySearch(albums, ['title'], {
        caseSensitive: false,
    });
    return searcher.search(char);
};


window.insert_playlists = function (data) {
    const formatted_playlists = format_playlists_data(data);
    sessionStorage.setItem('playlists', JSON.stringify(formatted_playlists));
    playlists = formatted_playlists;
};

window.get_playlists = function () {
    return JSON.parse(sessionStorage.getItem('playlists'));
};


window.get_searched_playlists = function (char) {
    const searcher = new FuzzySearch(playlists, ['title'], {
        caseSensitive: false,
    });
    return searcher.search(char);
};





