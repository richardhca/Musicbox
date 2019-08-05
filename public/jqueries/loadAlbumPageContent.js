var url = [];

$(document).ready(function () {
    album_page_play_mode();

    $('#album_button').on('click', function (event) {
        event.preventDefault();
        var html = albumPageToolBarTemplate({});
        $('#tool-bar').html(html);
        html = albumPageSearchBarTemplate({});
        $('#search-bar').html(html);
        html = albumsDeleteComfirmLayoutTemplate({});
        $('#delete_comfirm').html(html);
        album_page_get();
    });

    $('#content-area').on('click', '.album_play_icon', function (event) {
        event.preventDefault();
        console.log('album play icon click');
        console.log($(this).attr('href'));
    });

    $('#tool-bar').on('click', '.album_delete_icon', function () {
        const html = albumPageDeleteStatusToolBarTemplate({});
        $('#tool-bar').html(html);
        album_page_delete_mode();

    });

    $('#tool-bar').on('click', '.album_page_delete_cancel_icon', function () {
        const html = albumPageToolBarTemplate({});
        $('#tool-bar').html(html);
        album_page_play_mode();
    });

    $('#content-area').on('click', '.album_card', function (event) {
        event.preventDefault();
        const forced_select_icon = $(this).find('.album_select');
        if (forced_select_icon.css('display') != 'none') {
            const select_circle = $(this).find('.album_select');
            if (select_circle.hasClass('far')) {
                select_circle.removeClass('far');
                select_circle.addClass('fas');
                $(this).find('.album_cover_image').toggleClass('cover_forced');
            }
            else {
                select_circle.removeClass('fas');
                select_circle.addClass('far');
                $(this).find('.album_cover_image').toggleClass('cover_forced');
            }
        }
    });

    $('#tool-bar').on('click', '.album_page_delete_comfirm_icon', function () {
        const delete_number = $('.album_card .fas').length;
        if (delete_number === 0) {
            alert('Please select some albums.');
        }
        else {
            url = [];
            $('.album_card').each(function () {

                if ($(this).find('.album_select').hasClass('fas')) {
                    url.push('/album/delete/' + $(this).find('.album_page_album_id').text());
                }
            });
            $('#albumsDeleteComfirmPane .modal-title').text('Deleting ' + delete_number + ' album');
            $('#albumsDeleteComfirmPane').modal('show');
            console.log(url);
        }
    });

    $('#delete_comfirm').on('click', '.delete_album_comfirm', function (event) {
        event.preventDefault();
        console.log('album delete comfirm in album page');
        if (url.length != 0) {
            for (var i of url) {
                album_delete(i);
            }
            url = [];
        }
        if ($('#tool-bar').html().includes('album_page_delete_status_tool_bar')) {
            const html = albumPageToolBarTemplate({});
            $('#tool-bar').html(html);
        }
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
            album_page_play_mode();
            window.history.pushState(null, null, '/album');
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}

function album_delete(url) {
    $.ajax({
        type: 'DELETE',
        url: url,
        dataType: 'text',
        data: {info: 'ajax, album page', type: 'DELETE'},
        success: function (data) {
            console.log(data);
            album_page_get();
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}


