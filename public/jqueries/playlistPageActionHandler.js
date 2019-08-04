$(document).ready(function () {

    $('#tool-bar').on('click', '#createPL', function (event) {
        event.preventDefault();
        const playlist_name = $('#playlistName').val();
        playlist_create_post(playlist_name);
    });

    function playlist_create_post(data) {
        $.ajax({
            type: 'POST',
            url: '/playlist/create',
            dataType: 'json',
            data: {PlaylistName: data},
            success: function (data) {
                $('#mkplaylist').modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                $('#playlistName').val('');
                playlist_page_get();
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }
});