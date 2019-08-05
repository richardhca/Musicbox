// copy from https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
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

    $('#tool-bar').on('click', '#track_search', function () {
        const search_area = $('.track_page_search_area');
        if (search_area.hasClass('hidden')) {
            search_area.slideDown('slow').removeClass('hidden');
        }
        else {
            search_area.slideUp('slow', function () {
                $(this).addClass('hidden');
                track_page_clean_serach();
            });
        }
    });

    $('#search-bar').on('click', '#track_search_close', function () {
        $('.track_page_search_area').slideUp('slow', function () {
            $(this).addClass('hidden');
            track_page_clean_serach();
        });
    });

    $('#search-bar').on('keyup', '#track_search_input', debounce(function () {
        // console.log($(this).val());
        const result = get_searched_tracks($(this).val());
        const html = trackPageTemplate({tracks: result});
        $('#content-area').html(html);
    }, 250));

    function track_page_clean_serach() {
        $('#track_search_input').val('');
        const all_tracks = get_tracks();
        const html = trackPageTemplate({tracks: all_tracks});
        $('#content-area').html(html);
    }

    $('#tool-bar').on('click', '#album_search', function () {
        const search_area = $('.album_page_search_area');
        if (search_area.hasClass('hidden')) {
            search_area.slideDown('slow').removeClass('hidden');
        }
        else {
            search_area.slideUp('slow', function () {
                $(this).addClass('hidden');
                album_page_clean_serach();
            });
        }
    });

    $('#search-bar').on('click', '#album_search_close', function () {
        $('.album_page_search_area').slideUp('slow', function () {
            $(this).addClass('hidden');
            album_page_clean_serach();
        });
    });

    $('#search-bar').on('keyup', '#album_search_input', debounce(function () {
        // console.log($(this).val());
        const result = get_searched_albums($(this).val());
        const html = albumPageTemplate({albums: result});
        $('#content-area').html(html);
    }, 250));

    function album_page_clean_serach() {
        $('#album_search_input').val('');
        const all_albums = get_albums();
        const html = albumPageTemplate({albums: all_albums});
        $('#content-area').html(html);
    }

    $('#tool-bar').on('click', '#playlist_search', function () {
        const search_area = $('.playlist_page_search_area');
        if (search_area.hasClass('hidden')) {
            search_area.slideDown('slow').removeClass('hidden');
        }
        else {
            search_area.slideUp('slow', function () {
                $(this).addClass('hidden');
                playlist_page_clean_serach();
            });
        }
    });

    $('#search-bar').on('click', '#playlist_search_close', function () {
        $('.playlist_page_search_area').slideUp('slow', function () {
            $(this).addClass('hidden');
            playlist_page_clean_serach();
        });
    });

    $('#search-bar').on('keyup', '#playlist_search_input', debounce(function () {
        // console.log($(this).val());
        const result = get_searched_playlists($(this).val());
        const html = playlistPageTemplate({playlists: result});
        $('#content-area').html(html);
    }, 250));

    function playlist_page_clean_serach() {
        $('#playlist_search_input').val('');
        const all_playlists = get_playlists();
        const html = playlistPageTemplate({playlists: all_playlists});
        $('#content-area').html(html);
    }
});