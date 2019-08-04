$(document).ready(function () {

    $('#content-area').on('click', '.playlist_cover_image', function (event) {
        event.preventDefault();
        const html = playlistDetailToolBarTemplate({});
        $('#tool-bar').html(html);
        const url = $(this).attr('href');
        playlist_detail_get(url);
    });

    $('#content-area').on('click', '.playlist_text', function (event) {
        event.preventDefault();
        const html = playlistDetailToolBarTemplate({});
        $('#tool-bar').html(html);
        const url = $(this).attr('href');
        playlist_detail_get(url);
    });

    function playlist_detail_get(url) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            data: {info: 'ajax, playlist detail', type: 'GET'},
            success: function (data) {
                const html = playlistDetailTemplate({playlist: data.playlist});
                $('#content-area').html(html);
                window.history.pushState(null, null, '/playlist/detail');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }
});