$(document).ready(function () {
    $('#content-area').on('click', '.playlist_text', function (event) {
        event.preventDefault();
        const url = $(this).attr('href');
        playlist_detail_get('GET', url);
    });
	
    function playlist_detail_get(type, url) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'html',
            data: {info: 'ajax, playlist detail', type: type},
            success: function (result) {
                // console.log(result);
                // const pretty = html_beautify(result);
                // console.log(pretty);
                window.history.pushState(null, null, url);
                $('#tool-bar').html(
                    $(result).filter('#playlist_detail_tool_bar'));
                $('#content-area').html(
                    $(result).filter('#playlist_detail'));
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }
});