$(document).ready(function () {
    $('#track_button').click(function (event) {
        event.preventDefault();
        // $('#tool-bar i[id=\'add_playlist_icon\']').attr('id',
        // 'add_track_icon');
        $('#tool-bar i[id=\'add_playlist_icon\']').show();
        song_detail('GET');
    });

    //$('#tool-bar').on('click', 'i[id=\'add_track_icon\']', function (event) {
    //    event.preventDefault();
    //    song_create_get('GET');
    //});

    function song_detail(type) {
        $.ajax({
                   type: 'GET',
                   url: '/track',
                   dataType: 'html',
                   data: {info: 'ajax, track detail', type: type},
                   success: function (result) {
                       // const state = {id: 1, name: 'song'};
                       console.log(window.location.href);
                       console.log(result);
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

    // function song_create_get(type) {
    //     $.ajax({
    //                type: 'GET',
    //                url: '/track/create',
    //                dataType: 'html',
    //                data: {info: 'ajax, track create', type: type},
    //                success: function (result) {
    //                    console.log(window.location.href);
    //                    console.log(result);
    //                    window.history.pushState(null, null, '/track/create/');
    //                    $('#content-area').html(result);
    //
    //                },
    //                error: function (e) {
    //                    console.log('error: ', e);
    //                }
    //            });
    // }
});
