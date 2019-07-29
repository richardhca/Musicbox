$(document).ready(function () {
    $('#album_button').click(function (event) {
        event.preventDefault();
        album_page_get('GET');
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

                $.getScript('/jqueries/toggleIcon.js');
                $.getScript('/jqueries/loadAlbumDetailContent.js');
                $.getScript('/jqueries/albumPlaylistEventHandler.js');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});