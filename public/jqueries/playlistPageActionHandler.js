$(document).ready(function () {

    $('#createPL').on('click', function (event) {
        event.preventDefault();
        const playlist_name = $('#playlistName').val();
        playlist_create_post(playlist_name);
    });

    function playlist_create_post(data) {
        $.ajax({
            type: 'POST',
            url: '/playlist/create',
            dataType: 'html',
            data: {PlaylistName: data},
            success: function (result) {
                console.log(window.location.href);
                console.log(result);
                // window.history.pushState(null, null,
                //     '/playlist/create');
                $('#mkplaylist').modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                $('#playlistName').val('');

                playlist_detail_get('GET');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }


    function playlist_detail_get(type) {
        $.ajax({
            type: 'GET',
            url: '/playlist',
            dataType: 'html',
            data: {info: 'ajax, playlist page', type: type},
            success: function (result) {
                console.log(window.location.href);
                // const pretty = html_beautify(result);
                // console.log(pretty);
                window.history.pushState(null, null, '/playlist');
                $('#tool-bar').html(
                    $(result).filter('#playlist_page_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#playlist_page_detail'));

                $.getScript('/jqueries/toggleIcon.js');
                $.getScript('/jqueries/playPlaylistFeatures.js');
                $.getScript('/jqueries/albumPlaylistEventHandler.js');
                $.getScript('/jqueries/playlistPageActionHandler.js');

            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }
});