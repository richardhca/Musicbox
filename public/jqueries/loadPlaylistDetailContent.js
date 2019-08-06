var url = null;

$(document).ready(function () {
    // enableLoadPlaylistDeatil();

    var delete_url = null;
    $('#tool-bar').on('click', '.add_tracks_to_playlist', function (event) {
        event.preventDefault();
        $('#addtracks').modal('show');
    });

    $('#add_to_playlist').on('click', '#confirmAdd', function (event) {
        event.preventDefault();
        const id = $('#addTrackForm input:checked').val();
        console.log(id);
        if (id == undefined) {
            alert('Please select one song.');
        }
        else {
            const add_url = $('#addTrackForm').attr('action');
            console.log(id);
            playlist_add_track(id, add_url);
        }
    });

    $('#share_playlist').on('click', '#confirmShare', function (event) {
        event.preventDefault();
        const user = $('#ShareUser').val();
        console.log(user);
        if (user.length === 0) {
            alert('Please enter an user name.');
        }
        else {
            const share_url = $('#newShare').attr('action');
            console.log(share_url);
            share_playlist(user, share_url);
        }
    });

    $('#content-area').on('click', '.delete_playlist_in_detail_page', function (event) {
        event.preventDefault();
        delete_url = $(this).attr('href');
        console.log(delete_url);
        $('#playlistsDeleteComfirmInDetailPane .modal-title').text('Deleting one playlist');
        $('#playlistsDeleteComfirmInDetailPane').modal('show');
    });

    $('#delete_comfirm').on('click', '.delete_playlist_comfirm_in_detail', function (event) {
        event.preventDefault();
        console.log('playlist delete comfirm in playlist deatil page');
        if (delete_url != null) {
            playlist_delete_in_detail_page(delete_url);
            delete_url = null;
        }
    });

    $('#content-area').on('click', '#RejectShare', function (event) {
        event.preventDefault();
        const reject_url = $(this).attr('href');
        console.log(reject_url);

    });

    $('#content-area').on('click', '#AcceptShare', function (event) {
        event.preventDefault();
        const accept_url = $(this).attr('href');
        console.log(accept_url);
        accept_share_playlist(accept_url);
    });

});

function enableLoadPlaylistDeatil() {
    $('#content-area').on('click', '.playlist_cover_image', function (event) {
        event.preventDefault();
        url = $(this).attr('href');
        playlist_detail_get(url);
    });

    $('#content-area').on('click', '.playlist_text', function (event) {
        event.preventDefault();
        url = $(this).attr('href');
        playlist_detail_get(url);
    });

}

function disenableLoadPlaylistDeatil() {
    $('#content-area').off('click', '.playlist_cover_image');
    $('#content-area').off('click', '.playlist_text');
}

function playlist_detail_get(url) {
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        data: {info: 'ajax, playlist detail', type: 'GET'},
        success: function (data) {
            console.log('detail get');
            console.log(data.playlist.tracks);
            insert_tracks({tracks: data.playlist.tracks});
            console.log(url);
            var html = playlistDetailTemplate({playlist: data.playlist});
            $('#content-area').html(html);
            html = playlistDetailToolBarTemplate({});
            $('#tool-bar').html(html);
            html = playlistAddTemplate({playlist: data.playlist, tracks: data.tracks});
            $('#add_to_playlist').html(html);
            html = playlistShareTemplate({playlist: data.playlist});
            $('#share_playlist').html(html);
            html = playlistsDeleteComfirmInDetailLayoutTemplate({});
            $('#delete_comfirm').html(html);
            window.history.pushState(null, null, url);
            if(data.tracks.length === 0) {

            }
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}

function playlist_add_track(ids, add_url) {
    $.ajax({
        type: 'POST',
        url: add_url,
        dataType: 'json',
        data: {ids: ids},
        success: function (data) {
            // console.log(data);
            playlist_detail_get(url);
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}

function share_playlist(user_name, share_url) {
    $.ajax({
        type: 'POST',
        url: share_url,
        dataType: 'text',
        data: {destUser: user_name},
        success: function (data) {
            console.log(data);
            $('#shareplaylist').modal('hide');
            alert('Shared!');
        },
        error: function (e) {
            console.log('error: ', e);
            alert('User not found.');
        }
    });
}

function accept_share_playlist(accept_url) {
    $.ajax({
        type: 'PUT',
        url: accept_url,
        dataType: 'text',
        success: function (data) {
            console.log(data);
            playlist_detail_get(url);
            alert('Accept!');
        },
        error: function (e) {
            console.log('error: ', e);
            // alert('User not found.');
        }
    });
}



function playlist_delete_in_detail_page(url) {
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
    }).done(function () {
        console.log('done');
        var html = playlistPageToolBarTemplate({});
        $('#tool-bar').html(html);
        html = playlistPageSearchBarTemplate({});
        $('#search-bar').html(html);
        html = playlistsDeleteComfirmLayoutTemplate({});
        $('#delete_comfirm').html(html);
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    });
}

