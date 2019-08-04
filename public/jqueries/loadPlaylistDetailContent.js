$(document).ready(function () {
    $('.album_play_icon').on('click', function (event) {
        event.preventDefault();
        console.log('icon click');
        console.log($(this).attr('href'));

    });

    $('.album_cover_image').on('click', function (event) {
        event.preventDefault();
        const url = $(this).attr('href');
        playlist_detail_get('GET', url);
    });

    $('.album_text').on('click', function (event) {
        event.preventDefault();
        const url = $(this).attr('href');
        playlist_detail_get('GET', url);
    });


    function playlist_detail_get(type, url) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'html',
            data: {info: 'ajax, playlist detail', type: type},
            success: function (result) {
                // console.log(result);
                // const pretty = html_beautify(result);
                // console.log(pretty);
                // window.history.pushState(null, null, '/playlist/detail');
                $('#tool-bar').html(
                    $(result).filter('#playlist_detail_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#playlist_detail'));

                $.getScript('/jqueries/toggleIcon.js');
                $.getScript('/jqueries/playPlaylistFeatures.js');
                $.getScript('/jqueries/trackListEventHandler.js');
                $.getScript('/jqueries/albumPlaylistEventHandler.js');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});