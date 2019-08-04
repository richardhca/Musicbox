$(document).ready(function () {
    $('#track_button').on('click', function (event) {
        event.preventDefault();
        const html = trackPageToolBarTemplate({});
        $('#tool-bar').html(html);
        track_page_get();
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