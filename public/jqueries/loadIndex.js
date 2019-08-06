$(document).ready(function () {
    $('body').removeClass('fade-out');
    update_tracks_data();
    update_albums_data();
    update_playlists_data();
});

window.addEventListener('popstate', function (e) {
    const state = e.state;
    // console.log(state);
});

function update_tracks_data() {
    $.ajax({
        type: 'GET',
        url: '/track',
        dataType: 'json',
        cache: true,
        data: {info: 'ajax, tracks page', type: 'GET'},
        success: function (data) {
            insert_tracks(data);
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}

function update_albums_data() {
    $.ajax({
        type: 'GET',
        url: '/album',
        dataType: 'json',
        data: {info: 'ajax, album page', type: 'GET'},
        success: function (data) {
            insert_albums(data);
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}

function update_playlists_data() {
    $.ajax({
        type: 'GET',
        url: '/playlist',
        dataType: 'json',
        data: {info: 'ajax, playlist page', type: 'GET'},
        success: function (data) {
            insert_playlists(data);
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}