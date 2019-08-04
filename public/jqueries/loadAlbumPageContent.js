$(document).ready(function () {
    $('#album_button').on('click', function (event) {
        event.preventDefault();
        album_page_get('GET');
    });

    $('#content-area').on('click', '.album_play_icon', function (event) {
        event.preventDefault();
        console.log('album play icon click');
        console.log($(this).attr('href'));
    });


    function album_page_get(type) {
        $.ajax({
            type: 'GET',
            url: '/album',
            dataType: 'html',
            data: {info: 'ajax, album page', type: type},
            success: function (result) {
                console.log(window.location.href);
                // const pretty = html_beautify(result);
                // console.log(pretty);
                window.history.pushState(null, null, '/album');
                $('#tool-bar').html(
                    $(result).filter('#album_page_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#album_page_detail'));

            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});