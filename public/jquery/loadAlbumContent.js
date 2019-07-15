$(document).ready(function () {
    $('#album_button').click(function () {
        event.preventDefault();
        ajaxGet();
    });

    function ajaxGet() {
        $.ajax({
                   type: 'GET',
                   url: window.location + 'album',
                   success: function (result) {
                       console.log('succrss: ', result, ', ', window.location);
                       $('#test').empty().append(result);
                   },
                   error: function (e) {
                       console.log('error: ', e);
                   }
               });
    }
});