var sessionStorageHandler = require('../javascripts/sessionStorageHandler.js');
const pug = require('pug');

// copy from https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

$(document).ready(function () {
    $(function () {
        tracks_data_get();
    });


    // $('.search_area').toggle();
    $('#track_search').on('click', function () {
        const search_area = $('.search_area');
        if (search_area.hasClass('hidden')) {
            search_area.slideDown('slow').removeClass('hidden');
        }
        else {
            search_area.slideUp('slow', function () {
                $(this).addClass('hidden');
            });
        }
        // $('.search_area');
    });

    $('#track_search_close').on('click', function () {
        $('.search_area').slideUp('slow', function () {
            $(this).addClass('hidden');
        });
    });

    $('#track_search_input').on('keyup', debounce(function () {
        console.log($(this).val());
        const result = sessionStorageHandler.get_searched_tracks($(this).val());
        console.log(result);
        $.get('/views/track_page.pug', function (data) {
            const fn_track_page = pug.compile(data, {pretty: true});
            const html = fn_track_page({tracks: result});
            // console.log(html);
            $('#content-area').html(html);
        });
        $.getScript('/jqueries/uploadFormFeatures.js');
        $.getScript('/jqueries/trackListEventHandler.js');
        $.getScript('/jqueries/toggleIcon.js');

    }, 250));

    function tracks_data_get() {
        $.getJSON("/tracks", function (data) {
            sessionStorageHandler.insert_tracks(data);
        });

    }



});