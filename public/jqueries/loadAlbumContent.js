$(document).ready(function () {
    $('#album_button').click(function (event) {
        event.preventDefault();
        // console.log($('#tool-bar i').eq(1).attr('id'));
        $('#tool-bar i[id=\'add_song_icon\']').attr('id', 'add_album_icon');
        album_detail('GET');
    });

    $('#tool-bar')
        .on('click', 'i[id=\'add_album_icon\']', function (event) {
            event.preventDefault();
            album_create_get('GET');
        });

    function album_detail(type) {
        $.ajax({
                   type: 'GET',
                   url: '/album',
                   dataType: 'html',
                   data: {info: 'ajax, alubum detail', type: type},
                   success: function (result) {
                       console.log(window.location.href);
                       console.log(result);
                       window.history.pushState(null, null, '/album/');
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
                   url: '/album/create',
                   dataType: 'html',
                   data: {info: 'ajax, album create', type: type},
                   success: function (result) {
                       console.log(window.location.href);
                       console.log(result);
                       window.history.pushState(null, null, '/album/create/');
                       $('#content-area').html(result);

                   },
                   error: function (e) {
                       console.log('error: ', e);
                   }
               });
    }
});