$(document).ready(function () {
    $('#track_button').click(function (event) {
        event.preventDefault();
        // $('#tool-bar i[id=\'add_playlist_icon\']').attr('id',
        // 'add_track_icon');
        $('#tool-bar i[id=\'add_playlist_icon\']').show();
        tracks_detail('GET');
    });

    function tracks_detail(type) {
        $.ajax({
            type: 'GET',
            url: '/track',
            dataType: 'html',
            data: {info: 'ajax, tracks detail', type: type},
            success: function (result) {
                // const state = {id: 1, name: 'song'};
                console.log(window.location.href);
                // console.log(result);
                window.history.pushState(null, null, '/track/');
                // console.log($(result).filter('div').find('*'));
                $('#tool-bar')
                    .html($(result).filter('#track_tool_bar'));
                $('#content-area')
                    .html($(result).filter('#track_detail'));
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});
