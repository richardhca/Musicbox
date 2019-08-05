var url = [];

$(document).ready(function () {
    $('#track_button').on('click', function (event) {
        event.preventDefault();
        const html = trackPageToolBarTemplate({});
        $('#tool-bar').html(html);
        track_page_get();
    });

    $('#content-area').on('click', '#tack_page_delete_track', function (event) {
        event.preventDefault();
        url.push($(this).attr('href'));
        $('#tracksDeleteComfirmPane .modal-title').text('Deleting one track');
        $('#tracksDeleteComfirmPane').modal('show');
        console.log(url);
        // track_delete(url);
    });

    $('.delete_track_comfirm').on('click', function (event) {
        event.preventDefault();
        if (url.length != 0) {
            for (var i of url) {
                track_delete(i);
            }
            url = [];
        }
    });

    $('#tool-bar').on('click', '.track_delete_icon', function () {
        const html = trackPageDeleteStatusToolBarTemplate({});
        $('#tool-bar').html(html);
        $('.track_seclet_icon').show();
    });

    $('#tool-bar').on('click', '.track_page_delete_cancel_icon', function () {
        const html = trackPageToolBarTemplate({});
        $('#tool-bar').html(html);
        $('.track_seclet_icon').hide();
        $('#track_page_track_list .track_seclet_icon .track_seclet')
            .removeClass('fas').addClass('far');
    });

    $('#content-area').on('click', '.track_list', function (event) {
        event.preventDefault();
        const forced_select_icon = $(this).find('.track_seclet_icon');
        if (forced_select_icon.css('display') != 'none') {
            const select_circle = $(this).find('.track_seclet_icon .track_seclet');
            if (select_circle.hasClass('far')) {
                select_circle.removeClass('far');
                select_circle.addClass('fas');
            }
            else {
                select_circle.removeClass('fas');
                select_circle.addClass('far');
            }
        }
    });

    $('#tool-bar').on('click', '.track_page_delete_comfirm_icon', function () {
        $('#tracksDeleteComfirmPane .modal-title').text('Deleting one track');
        $('#tracksDeleteComfirmPane').modal('show');
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
