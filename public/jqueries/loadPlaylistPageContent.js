

$(document).ready(function () {
    // playlist_page_play_mode();
    var url = [];
    $('#playlist_button').on('click', function (event) {
        event.preventDefault();
        var html = playlistPageToolBarTemplate({});
        $('#tool-bar').html(html);
        html = playlistPageSearchBarTemplate({});
        $('#search-bar').html(html);
        html = playlistCreateTemplate({});
        $('#playlist_create').html(html);
        html = playlistsDeleteComfirmLayoutTemplate({});
        $('#delete_comfirm').html(html);
        playlist_page_get();
    });

    $('#content-area').on('click', '.playlist_play_icon', function (event) {
        event.preventDefault();
        console.log('icon click');
        console.log($(this).attr('href'));

    });

    $('#tool-bar').on('click', '.playlist_delete_icon', function () {
        const html = playlistPageDeleteStatusToolBarTemplate({});
        $('#tool-bar').html(html);
        playlist_page_delete_mode();

    });

    $('#tool-bar').on('click', '.playlist_page_delete_cancel_icon', function () {
        const html = playlistPageToolBarTemplate({});
        $('#tool-bar').html(html);
        playlist_page_play_mode();
    });


    $('#content-area').on('click', '.playlist_card', function (event) {
        event.preventDefault();
        const forced_select_icon = $(this).find('.playlist_select');
        if (forced_select_icon.css('display') != 'none') {
            const select_circle = $(this).find('.playlist_select');
            if (select_circle.hasClass('far')) {
                select_circle.removeClass('far');
                select_circle.addClass('fas');
                $(this).find('.playlist_cover_image').toggleClass('cover_forced');
            }
            else {
                select_circle.removeClass('fas');
                select_circle.addClass('far');
                $(this).find('.playlist_cover_image').toggleClass('cover_forced');
            }
        }
    });

    $('#tool-bar').on('click', '.playlist_page_delete_comfirm_icon', function () {
        const delete_number = $('.playlist_card .fas').length;
        if (delete_number === 0) {
            alert('Please select some playlists.');
        }
        else {
            url = [];
            $('.playlist_card').each(function () {

                if ($(this).find('.playlist_select').hasClass('fas')) {
                    url.push('/playlist/delete/' + $(this).find('.playlist_page_playlist_id').text());
                }
            });
            $('#playlistsDeleteComfirmPane .modal-title').text('Deleting ' + delete_number + ' playlist');
            $('#playlistsDeleteComfirmPane').modal('show');
            console.log(url);
        }
    });

    $('#delete_comfirm').on('click', '.delete_playlist_comfirm', function (event) {
        event.preventDefault();
        console.log(url);
        if (url.length != 0) {
            for (var i of url) {
                playlist_delete(i);
            }
            url = [];
        }
        if ($('#tool-bar').html().includes('playlist_page_delete_status_tool_bar')) {
            const html = playlistPageToolBarTemplate({});
            $('#tool-bar').html(html);
        }
    });
});

function playlist_page_get() {
    $.ajax({
        type: 'GET',
        url: '/playlist',
        dataType: 'json',
        data: {info: 'ajax, playlist page', type: 'GET'},
        success: function (data) {
            console.log('page_get');
            console.log(data);
            insert_playlists(data);
            const html = playlistPageTemplate({playlists: data.playlists});
            $('#content-area').html(html);
            playlist_page_play_mode();
            window.history.pushState(null, null, '/playlist');
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}

function playlist_delete(url) {
    $.ajax({
        type: 'DELETE',
        url: url,
        dataType: 'text',
        data: {info: 'ajax, playlist page', type: 'DELETE'},
        success: function (data) {
            console.log(data);
            playlist_page_get();
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}