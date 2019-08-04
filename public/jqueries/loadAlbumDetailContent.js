$(document).ready(function () {
    $('#content-area').on('click', '.album_cover_image', function (event) {
        event.preventDefault();
        console.log('album cover image click');
        const url = $(this).attr('href');
        album_detail_get('GET', url);
    });

    $('#content-area').on('click', '.album_text', function (event) {
        event.preventDefault();
        console.log('album text click');
        const url = $(this).attr('href');
        album_detail_get('GET', url);
    });


    function album_detail_get(type, url) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'html',
            data: {info: 'ajax, album detail', type: type},
            success: function (result) {
                console.log(window.location.href);
                // const pretty = html_beautify(result);
                // console.log(pretty);
                // window.history.pushState(null, null, url);
                $('#tool-bar').html(
                    $(result).filter('#album_detail_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#album_detail'));

            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});