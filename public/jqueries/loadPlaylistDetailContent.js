var url = null;

$(document).ready(function () {
    enableLoadPlaylistDeatil();

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

    $('#add_to_playlist').on('click', '#confirmShare', function (event) {
        event.preventDefault();
        const user = $('#ShareUser').val();
        console.log(user);
        // if (id == undefined) {
        //     alert('Please select one song.');
        // }
        // else {
        //     const add_url = $('#addTrackForm').attr('action');
        //     console.log(id);
        //     playlist_add_track(id, add_url);
        // }

    });
});

function enableLoadPlaylistDeatil() {
    $('#content-area').on('click', '.playlist_cover_image', function (event) {
        event.preventDefault();
        var url = $(this).attr('href');
        playlist_detail_get(url);
    });

    $('#content-area').on('click', '.playlist_text', function (event) {
        event.preventDefault();
        var url = $(this).attr('href');
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
            console.log(data);
            var html = playlistDetailTemplate({playlist: data.playlist});
            $('#content-area').html(html);
            html = playlistDetailToolBarTemplate({});
            $('#tool-bar').html(html);
            html = playlistAddTemplate({playlist: data.playlist, tracks: data.tracks});
            $('#add_to_playlist').html(html);
            window.history.pushState(null, null, url);
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

