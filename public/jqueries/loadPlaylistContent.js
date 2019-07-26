$(document).ready(function () {
    $('#playlist_button').click(function (event) {
        event.preventDefault();
        playlist_detail('GET');
    });

    $('#tool-bar')
        .on('click', 'i[id=\'add_playlist_icon\']', function (event) {
            event.preventDefault();
            playlist_create_get('GET');
        });

    function playlist_detail(type) {
        $.ajax({
            type: 'GET',
            url: '/playlist',
            dataType: 'html',
            data: {info: 'ajax, playlist detail', type: type},
            success: function (result) {
                console.log(window.location.href);
                console.log(result);
                window.history.pushState(null, null, '/playlist');
                $('#tool-bar').html(
                    $(result).filter('#playlist_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#playlist_detail'));

                $.getScript('/jqueries/toggleIcon.js');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

    function playlist_create_get(type) {
        $.ajax({
            type: 'GET',
            url: '/playlist/create',
            dataType: 'html',
            data: {info: 'ajax, playlist create', type: type},
            success: function (result) {
                console.log(window.location.href);
                console.log(result);
                window.history.pushState(null, null,
                    '/playlist/create');
                $('#content-area').html(result);

            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }
});