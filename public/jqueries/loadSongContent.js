$(document).ready(function () {
    $('#song_button').click(function (event) {
        event.preventDefault();
        // console.log($('#tool-bar i').eq(1).attr('id'));
        $('#tool-bar i[id=\'add_album_icon\']').attr('id', 'add_song_icon');
        song_detail('GET');
    });

    $('#tool-bar').on('click', 'i[id=\'add_song_icon\']', function (event) {
        event.preventDefault();
        song_create_get('GET');
    });

    function song_detail(type) {
        $.ajax({
                   type: 'GET',
                   url: '/song',
                   dataType: 'html',
                   data: {info: 'ajax, song detail', type: type},
                   success: function (result) {
                       // const state = {id: 1, name: 'song'};
                       console.log(window.location.href);
                       console.log(result);
                       window.history.pushState(null, null, '/song/');
                       $('#content-area').html(result);
                   },
                   error: function (e) {
                       console.log('error: ', e);
                   }
               });
    }

    function song_create_get(type) {
        $.ajax({
                   type: 'GET',
                   url: '/song/create',
                   dataType: 'html',
                   data: {info: 'ajax, song create', type: type},
                   success: function (result) {
                       console.log(window.location.href);
                       console.log(result);
                       window.history.pushState(null, null, '/song/create/');
                       $('#content-area').html(result);

                   },
                   error: function (e) {
                       console.log('error: ', e);
                   }
               });
    }
});