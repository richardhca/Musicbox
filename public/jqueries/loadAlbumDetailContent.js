$(document).ready(function () {
    $('#content-area').on('click', '.album_cover_image', function (event) {
        event.preventDefault();
        const html = albumDetailToolBarTemplate({});
        $('#tool-bar').html(html);
        console.log('album cover image click');
        const url = $(this).attr('href');
        album_detail_get(url);
    });

    $('#content-area').on('click', '.album_text', function (event) {
        event.preventDefault();
        const html = albumDetailToolBarTemplate({});
        $('#tool-bar').html(html);
        console.log('album cover image click');
        console.log('album text click');
        const url = $(this).attr('href');
        album_detail_get(url);
    });

    function album_detail_get(url) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            data: {info: 'ajax, album detail', type: 'GET'},
            success: function (data) {
                const html = albumDetailTemplate({album: data.album});
                $('#content-area').html(html);
                window.history.pushState(null, null, '/album/detail');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});