$(document).ready(function () {

    $('#content-area').on('click', '#like_icon', function () {
        const like_icon = $(this);
        if (like_icon.hasClass('far')) {
            like_icon.removeClass('far').addClass('fas');
        }
        else {
            like_icon.removeClass('fas').addClass('far');
        }
    });
});

function album_page_play_mode() {
    $('#content-area').off('mouseenter', '.album_cover');
    $('#content-area').off('mouseleave', '.album_cover');
    $('#content-area').off('mouseenter', '.album_cover_in_detail_page');
    $('#content-area').off('mouseleave', '.album_cover_in_detail_page');

    $('.album_card .album_cover_image').removeClass('cover_forced');
    $('.album_select').hide();

    enableLoadAlnumDeatil();

    $('#content-area').on('mouseenter', '.album_cover', function () {
        const forced_album_cover_image = $(this).find('.album_cover_image');
        const forced_album_cover_play_icon = $(this).find('.album_play_icon');
        forced_album_cover_image.toggleClass('cover_forced');
        forced_album_cover_play_icon.toggle();
    });

    $('#content-area').on('mouseleave', '.album_cover', function () {
        const forced_album_cover_image = $(this).find('.album_cover_image');
        forced_album_cover_image.toggleClass('cover_forced');
        const forced_album_cover_play_icon = $(this).find('.album_play_icon');
        forced_album_cover_play_icon.toggle();
    });

    $('#content-area').on('mouseenter', '.album_cover_in_detail_page', function () {
        console.log('enter');
        const forced_album_cover_image = $(this).find('.album_cover_image');
        const forced_album_cover_play_icon = $(this).find('.album_play_icon');
        forced_album_cover_image.toggleClass('cover_forced');
        forced_album_cover_play_icon.show();
    });

    $('#content-area').on('mouseleave', '.album_cover_in_detail_page', function () {
        console.log('leave');
        const forced_album_cover_image = $(this).find('.album_cover_image');
        forced_album_cover_image.toggleClass('cover_forced');
        const forced_album_cover_play_icon = $(this).find('.album_play_icon');
        forced_album_cover_play_icon.hide();
    });
}

function album_page_delete_mode() {
    $('#content-area').off('mouseenter', '.album_cover');
    $('#content-area').off('mouseleave', '.album_cover');
    $('#content-area').off('mouseenter', '.album_cover_in_detail_page');
    $('#content-area').off('mouseleave', '.album_cover_in_detail_page');
    disenableLoadAlnumDeatil();

    $('.album_card .album_cover_image').addClass('cover_forced');
    $('.album_select').show();

}


function playlist_page_play_mode() {
    $('#content-area').off('mouseenter', '.playlist_cover');
    $('#content-area').off('mouseleave', '.playlist_cover');
    $('#content-area').off('mouseenter', '.playlist_cover_in_detail_page');
    $('#content-area').off('mouseleave', '.playlist_cover_in_detail_page');

    $('.playlist_card .playlist_cover_image').removeClass('cover_forced');
    $('.playlist_select').hide();

    enableLoadPlaylistDeatil();

    $('#content-area').on('mouseenter', '.playlist_cover', function () {
        const forced_playlist_cover_image = $(this).find('.playlist_cover_image');
        const forced_playlist_cover_play_icon = $(this).find('.playlist_play_icon');
        forced_playlist_cover_image.toggleClass('cover_forced');
        forced_playlist_cover_play_icon.toggle();
    });

    $('#content-area').on('mouseleave', '.playlist_cover', function () {
        const forced_playlist_cover_image = $(this).find('.playlist_cover_image');
        forced_playlist_cover_image.toggleClass('cover_forced');
        const forced_playlist_cover_play_icon = $(this).find('.playlist_play_icon');
        forced_playlist_cover_play_icon.toggle();
    });

    $('#content-area').on('mouseenter', '.playlist_cover_in_detail_page', function () {
        console.log('enter');
        const forced_playlist_cover_image = $(this).find('.playlist_cover_image');
        const forced_playlist_cover_play_icon = $(this).find('.playlist_play_icon');
        forced_playlist_cover_image.toggleClass('cover_forced');
        forced_playlist_cover_play_icon.show();
    });

    $('#content-area').on('mouseleave', '.playlist_cover_in_detail_page', function () {
        console.log('leave');
        const forced_playlist_cover_image = $(this).find('.playlist_cover_image');
        forced_playlist_cover_image.toggleClass('cover_forced');
        const forced_playlist_cover_play_icon = $(this).find('.playlist_play_icon');
        forced_playlist_cover_play_icon.hide();
    });
}

function playlist_page_delete_mode() {
    $('#content-area').off('mouseenter', '.playlist_cover');
    $('#content-area').off('mouseleave', '.playlist_cover');
    $('#content-area').off('mouseenter', '.playlist_cover_in_detail_page');
    $('#content-area').off('mouseleave', '.playlist_cover_in_detail_page');

    disenableLoadPlaylistDeatil();

    $('.playlist_card .playlist_cover_image').addClass('cover_forced');
    $('.playlist_select').show();

}