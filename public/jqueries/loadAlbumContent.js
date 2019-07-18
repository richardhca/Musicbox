const info = 'ajax';

$(document).ready(function () {
    $('#album_button').click(function (event) {
        event.preventDefault();
        // console.log($('#tool-bar i').eq(1).attr('id'));
        // $('#tool-bar i').eq(1).attr('id', 'add_album_icon');
        album_detail('GET');
    });

    $('#add_album_icon').click(function (event) {
        console.log(event);
        event.preventDefault();
        album_create_get();
    });

    function album_detail(type) {
        $.ajax({
                   type: 'GET',
                   url: '/album',
                   dataType: 'html',
                   data: {info: info, type: type},
                   success: function (result) {
                       window.history.pushState(null, null, '/album/');
                       $('#content-area').load('/album' + ' #content-area > *');
                   },
                   error: function (e) {
                       console.log('error: ', e);
                   }
               });
    }

    function album_create_get() {
        $.ajax({
                   type: 'GET',
                   url: '/album/create',
                   success: function (result) {
                       window.history.pushState(null, null, '/album/create/');
                       $('#content-area')
                           .load('/album/create' + ' #content-area > *');

                   },
                   error: function (e) {
                       console.log('error: ', e);
                   }
               });
    }
});