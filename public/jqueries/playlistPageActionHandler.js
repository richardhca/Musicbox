$(document).ready(function () {

    $('#playlist_create').on('click', '#createPL', function (event) {
        event.preventDefault();
        const playlist_name = $('#playlistName').val();
        if (playlist_name === '') {
            alert('Please enter the playlist name.');
        }
        else if (playlist_name.length < 3) {
            alert('the length of name must be more than 2 chars.');
        }
        else {
            playlist_create_post(playlist_name);
        }
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