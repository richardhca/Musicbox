var url = [];

$(document).ready(function () {

    $('#track_button').on('click', function (event) {
        event.preventDefault();
        var html = trackPageToolBarTemplate({});
        $('#tool-bar').html(html);
        html = trackPageSearchBarTemplate({});
        $('#search-bar').html(html);
        html = tracksDeleteComfirmLayoutTemplate({});
        $('#delete_comfirm').html(html);
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

    $('#delete_comfirm').on('click', '.delete_track_comfirm', function (event) {
        event.preventDefault();
        if (url.length != 0) {
            for (var i of url) {
                track_delete(i);
            }
            url = [];
        }
        if ($('#tool-bar').html().includes('track_page_delete_status_tool_bar')) {
            const html = trackPageToolBarTemplate({});
            $('#tool-bar').html(html);
        }
    });

    $('#tool-bar').on('click', '.track_delete_icon', function () {
        const html = trackPageDeleteStatusToolBarTemplate({});
        $('#tool-bar').html(html);
        $('.track_seclet_icon').show();
        disenabletracklistPlay();

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
    });

    $('#tool-bar').on('click', '.track_page_delete_cancel_icon', function () {
        const html = trackPageToolBarTemplate({});
        $('#tool-bar').html(html);
        $('.track_seclet_icon').hide();
        $('#track_page_track_list .track_seclet_icon .track_seclet')
            .removeClass('fas').addClass('far');
        enabletracklistPlay();

    });


    $('#tool-bar').on('click', '.track_page_delete_comfirm_icon', function () {
        const delete_number = $('#track_page_track_list .track_seclet_icon .fas').length;
        if (delete_number === 0) {
            alert('Please select some tracks.');
        }
        else {
            url = [];
            $('#track_page_track_list .track_list').each(function () {
                if ($(this).find('.track_seclet').hasClass('fas')) {
                    url.push('/track/delete/' + $(this).find('.track_page_track_id').text());
                }
            });
            $('#tracksDeleteComfirmPane .modal-title').text('Deleting ' + delete_number + ' track');
            $('#tracksDeleteComfirmPane').modal('show');
            console.log(url);
            enabletracklistPlay();
        }
    });

});

function track_page_get() {
    $.ajax({
        type: 'GET',
        url: '/track',
        dataType: 'json',
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
        data: {info: 'ajax, tracks page', type: 'DELETE'},
        success: function (data) {
            console.log(data);
            track_page_get();
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}
