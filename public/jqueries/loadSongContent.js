$(document).ready(function () {
    $('#song_button').click(function (event) {
        event.preventDefault();
        // console.log($('#tool-bar i').eq(1).attr('id'));
        // $('#tool-bar i').eq(1).attr('id', 'add_song_icon');
        song_detail();
    });

    $('#add_song_icon').click(function (event) {
        console.log(event);
        event.preventDefault();
        song_create_get();
    });

    function song_detail() {
        $.ajax({
                   type: 'GET',
                   url: '/song',
                   dataType: 'html',
                   success: function (result) {
                       // const state = {id: 1, name: 'song'};
                       window.history.pushState(null, null, '/song/');
                       $('#content-area').load('/song' + ' #content-area > *');
                   },
                   error: function (e) {
                       console.log('error: ', e);
                   }
               });
    }

    function song_create_get() {
        $.ajax({
                   type: 'GET',
                   url: '/song/create',
                   success: function (result) {
                       window.history.pushState(null, null, '/song/create/');
                       $('#content-area')
                           .load('/song/create' + ' #content-area > *');

                   },
                   error: function (e) {
                       console.log('error: ', e);
                   }
               });
    }
});