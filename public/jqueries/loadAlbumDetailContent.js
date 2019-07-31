$(document).ready(function () {
    $('.album_card').on('click', function (event) {
        event.preventDefault();
        album_detail_get('GET');
    });


    function album_detail_get(type) {
        $.ajax({
            type: 'GET',
            url: '/album/detail',
            dataType: 'html',
            data: {info: 'ajax, album detail', type: type},
            success: function (result) {
                console.log(window.location.href);
                // const pretty = html_beautify(result);
                // console.log(pretty);
                window.history.pushState(null, null, '/album/detail');
                $('#tool-bar').html(
                    $(result).filter('#album_detail_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#album_detail'));

                $.getScript('/jqueries/toggleIcon.js');
                $.getScript('/jqueries/trackListEventHandler.js');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});