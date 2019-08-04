$(document).ready(function () {
    $('#track_button').on('click', function (event) {
        event.preventDefault();
        const html = trackPageToolBarTemplate({});
        $('#tool-bar').html(html);
        track_page_get();
    });

    $('#content-area').on('click', '#tack_page_delete_track', function (event) {
        event.preventDefault();
        alert('Delete this track?');
        const url = $(this).attr('href');
        console.log(url);
        track_delete(url);
    });

});

function track_page_get() {
    $.ajax({
        type: 'GET',
        url: '/track',
        dataType: 'json',
        cache: true,
        data: {info: 'ajax, tracks page', type: 'GET'},
        success: function (data) {
            insert_tracks(data);
            const html = trackPageTemplate({tracks: data.tracks});
            $('#content-area').html(html);
            window.history.pushState(null, null, '/track');
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}

function track_delete(url) {
    $.ajax({
        type: 'DELETE',
        url: url,
        dataType: 'text',
        cache: true,
        data: {info: 'ajax, tracks page', type: 'GET'},
        success: function (data) {
            console.log(data);
            track_page_get();
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}
