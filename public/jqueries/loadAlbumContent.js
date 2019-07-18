$(document).ready(function () {
    $('#playlist_button').click(function (event) {
        event.preventDefault();
        // console.log($('#tool-bar i').eq(1).attr('id'));
        $('#tool-bar i[id=\'add_track_icon\']').attr('id', 'add_playlist_icon');
        album_detail('GET');
    });

    $('#tool-bar')
        .on('click', 'i[id=\'add_playlist_icon\']', function (event) {
            event.preventDefault();
            album_create_get('GET');
        });

    function album_detail(type) {
        $.ajax({
                   type: 'GET',
                   url: '/playlist',
                   dataType: 'html',
                   data: {info: 'ajax, playlist detail', type: type},
                   success: function (result) {
                       console.log(window.location.href);
                       console.log(result);
                       window.history.pushState(null, null, '/playlist/');
                       $('#content-area').html(result);
                   },
                   error: function (e) {
                       console.log('error: ', e);
                   }
               });
    }

    function album_create_get(type) {
        $.ajax({
                   type: 'GET',
                   url: '/playlist/create',
                   dataType: 'html',
                   data: {info: 'ajax, playlist create', type: type},
                   success: function (result) {
                       console.log(window.location.href);
                       console.log(result);
                       window.history.pushState(null, null,
                                                '/playlist/create/');
                       $('#content-area').html(result);

                   },
                   error: function (e) {
                       console.log('error: ', e);
                   }
               });
    }
});