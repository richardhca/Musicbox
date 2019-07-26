$(document).ready(function () {
    $('#playlist_card').on('click', function (event) {
        console.log('click');
        event.preventDefault();
        playlist_detail_get('GET');
    });


    function playlist_detail_get(type) {
        $.ajax({
            type: 'GET',
            url: '/playlist/detail',
            dataType: 'html',
            data: {info: 'ajax, playlist detail', type: type},
            success: function (result) {
                // console.log(window.location.href);
                // console.log(result);
                window.history.pushState(null, null, '/playlist/detail');
                $('#tool-bar').html(
                    $(result).filter('#playlist_detail_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#playlist_detail'));

                $.getScript('/jqueries/toggleIcon.js');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});