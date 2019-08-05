$(document).ready(function () {
    $('#playlist_button').on('click', function (event) {
        event.preventDefault();
        var html = playlistPageToolBarTemplate({});
        $('#tool-bar').html(html);
        html = playlistPageSearchBarTemplate({});
        $('#search-bar').html(html);
        html = playlistsDeleteComfirmLayoutTemplate({});
        $('#delete_comfirm').html(html);
        playlist_page_get();
    });

    $('#content-area').on('click', '.playlist_play_icon', function (event) {
        event.preventDefault();
        console.log('icon click');
        console.log($(this).attr('href'));

    });
});

function playlist_page_get() {
    $.ajax({
        type: 'GET',
        url: '/playlist',
        dataType: 'json',
        data: {info: 'ajax, playlist page', type: 'GET'},
        success: function (data) {
            insert_playlists(data);
            const playlists = get_playlists();
            const html = playlistPageTemplate({playlists: data.playlists});
            $('#content-area').html(html);
            window.history.pushState(null, null, '/playlist');
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}