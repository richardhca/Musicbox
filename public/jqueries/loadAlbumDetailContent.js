

$(document).ready(function () {
    var delete_url = null;
    enableLoadAlnumDeatil();

    $('#content-area').on('click', '.delete_album_in_detail_page', function (event) {
        event.preventDefault();
        delete_url = $(this).attr('href');
        $('#albumsDeleteComfirmInDetailPane .modal-title').text('Deleting one album');
        $('#albumsDeleteComfirmInDetailPane').modal('show');
    });

    $('#delete_comfirm').on('click', '.delete_album_comfirm_in_detail', function (event) {
        event.preventDefault();
        console.log('album delete comfirm in album deatil page');
        if (delete_url != null) {
            album_delete_in_detail_page(delete_url);
            delete_url = null;
        }
    });
});

function enableLoadAlnumDeatil() {
    $('#content-area').on('click', '.album_cover_image', function (event) {
        event.preventDefault();
        var html = albumDetailToolBarTemplate({});
        $('#tool-bar').html(html);
        html = albumsDeleteComfirmInDetailLayoutTemplate({});
        $('#delete_comfirm').html(html);
        console.log('album cover image click');
        const url = $(this).attr('href');
        album_detail_get(url);
    });

    $('#content-area').on('click', '.album_text', function (event) {
        event.preventDefault();
        var html = albumDetailToolBarTemplate({});
        $('#tool-bar').html(html);
        html = albumsDeleteComfirmLayoutTemplate({});
        $('#delete_comfirm').html(html);
        console.log('album cover image click');
        console.log('album text click');
        const url = $(this).attr('href');
        album_detail_get(url);
    });
}

function disenableLoadAlnumDeatil() {
    $('#content-area').off('click', '.album_cover_image');
    $('#content-area').off('click', '.album_text');
}

function album_detail_get(url) {
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        data: {info: 'ajax, album detail', type: 'GET'},
        success: function (data) {
            const html = albumDetailTemplate({album: data.album});
            $('#content-area').html(html);
            window.history.pushState(null, null, url);
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}

function album_delete_in_detail_page(url) {
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
    }).done(function () {
        console.log('done');
        var html = albumPageToolBarTemplate({});
        $('#tool-bar').html(html);
        html = albumPageSearchBarTemplate({});
        $('#search-bar').html(html);
        html = albumsDeleteComfirmLayoutTemplate({});
        $('#delete_comfirm').html(html);
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    });
}