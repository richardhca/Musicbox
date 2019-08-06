$(document).ready(function () {
    $('.playlist_cover').on('click', function(event) {
        playlist_send('../playlists/Sample');
    });
    $('#playlist_detail_play_btn').click(function(event) {
        playlist_send('../playlists/Sample');
    });

    function playlist_send(url){
        $.ajax({
            url: url,
            dataType: 'text',
            success : function(data) {
                loadPlaylist(data);
            }
        });
    }
});