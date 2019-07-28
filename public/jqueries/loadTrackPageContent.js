$(document).ready(function () {
    $('#track_button').click(function (event) {
        event.preventDefault();
        tracks_page_get('GET');
    });

    function tracks_page_get(type) {
        $.ajax({
            type: 'GET',
            url: '/track',
            dataType: 'html',
            data: {info: 'ajax, tracks page', type: type},
            success: function (result) {
                // const state = {id: 1, name: 'song'};
                console.log(window.location.href);
                // const pretty = html_beautify(result);
                // console.log(pretty);
                // console.log(result);
                window.history.pushState(null, null, '/track');
                // console.log($(result).filter('div').find('*'));
                $('#tool-bar')
                    .html($(result).filter('#track_page_tool_bar'));
                $('#content-area')
                    .html($(result).filter('#track_page_detail'));

                $.getScript('/jqueries/uploadFormFeatures.js');
                $.getScript('/jqueries/trackListEventHandler.js');
                $.getScript('/jqueries/searchHandler.js');
                $.getScript('/jqueries/toggleIcon.js');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }

});
