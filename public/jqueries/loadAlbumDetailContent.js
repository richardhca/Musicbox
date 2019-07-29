$(document).ready(function () {

    $('.album_play_icon').on('click', function (event) {
        event.preventDefault();
        console.log('icon click');
        console.log($(this).attr('href'));
        // album_detail_get('GET');
    });

    $('.album_cover_image').on('click', function (event) {
        event.preventDefault();
        const url = $(this).attr('href');
        album_detail_get('GET', url);
    });

    $('.album_text').on('click', function (event) {
        event.preventDefault();
        const url = $(this).attr('href');
        album_detail_get('GET', url);
    });


    function album_detail_get(type, url) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'html',
            data: {info: 'ajax, album detail', type: type},
            success: function (result) {
                console.log(window.location.href);
                // const pretty = html_beautify(result);
                // console.log(pretty);
                window.history.pushState(null, null, url);
                $('#tool-bar').html(
                    $(result).filter('#album_detail_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#album_detail'));

                $.getScript('/jqueries/toggleIcon.js');
                $.getScript('/jqueries/trackListEventHandler.js');
                $.getScript('/jqueries/albumPlaylistEventHandler.js');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});