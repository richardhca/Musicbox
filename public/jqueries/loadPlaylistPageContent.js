$(document).ready(function () {
    $('#playlist_button').on('click', function (event) {
        event.preventDefault();
        playlist_page_get('GET');
    });

    function playlist_page_get(type) {
        $.ajax({
            type: 'GET',
            url: '/playlist',
            dataType: 'html',
            data: {info: 'ajax, playlist page', type: type},
            success: function (result) {
                console.log(window.location.href);
                // const pretty = html_beautify(result);
                // console.log(pretty);
                window.history.pushState(null, null, '/playlist');
                $('#tool-bar').html(
                    $(result).filter('#playlist_page_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#playlist_page_detail'));

            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }
});