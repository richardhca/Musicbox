$(document).ready(function () {
    $('.album_cover').on('click', function(event) {
        playlist_send('../playlists/SAO');
    });
	
	function playlist_send(url){
		$.ajax({
            url: '../playlists/SAO',
            dataType: 'text',
            success : function(data) {
                loadPlaylist(data);
            }
        });
	}
});