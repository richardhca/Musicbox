$(document).ready(function () {
    $('#song_button').click(function () {
        event.preventDefault();
        ajaxGet();
    });

    function ajaxGet() {
        $.ajax({
                   type: 'GET',
                   url: window.location + 'song',
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