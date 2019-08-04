$(document).ready(function () {
    $('#album_button').on('click', function (event) {
        event.preventDefault();
        const html = albumPageToolBarTemplate({});
        $('#tool-bar').html(html);
        album_page_get();
    });

    $('#content-area').on('click', '.album_play_icon', function (event) {
        event.preventDefault();
        console.log('album play icon click');
        console.log($(this).attr('href'));
    });
});

function album_page_get() {
    $.ajax({
        type: 'GET',
        url: '/album',
        dataType: 'json',
        data: {info: 'ajax, album page', type: 'GET'},
        success: function (data) {
            insert_albums(data);
            const albums = get_albums();
            html = albumPageTemplate({albums: data.albums});
            $('#content-area').html(html);
            window.history.pushState(null, null, '/album');
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}