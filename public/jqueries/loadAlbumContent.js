$(document).ready(function () {
    $('#album_button').click(function (event) {
        event.preventDefault();
        album_detail('GET');
    });


    function album_detail(type) {
        $.ajax({
            type: 'GET',
            url: '/album',
            dataType: 'html',
            data: {info: 'ajax, album detail', type: type},
            success: function (result) {
                console.log(window.location.href);
                console.log(result);
                window.history.pushState(null, null, '/album');
                $('#tool-bar').html(
                    $(result).filter('#album_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#album_detail'));

                $.getScript('/jqueries/toggleIcon.js');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});