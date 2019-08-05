$(document).ready(function () {
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
        //console.log('enter');
        const forced_album_cover_image = $(this).find('.album_cover_image');
        const forced_album_cover_play_icon = $(this).find('.album_play_icon');
        forced_album_cover_image.toggleClass('cover_forced');
        forced_album_cover_play_icon.show();
    });

    $('#content-area').on('mouseleave', '.album_cover_in_detail_page', function () {
        //console.log('leave');
        const forced_album_cover_image = $(this).find('.album_cover_image');
        forced_album_cover_image.toggleClass('cover_forced');
        const forced_album_cover_play_icon = $(this).find('.album_play_icon');
        forced_album_cover_play_icon.hide();
    });

    $('#content-area').on('click', '#like_icon', function () {
        const like_icon = $(this);
        if (like_icon.hasClass('far')) {
            like_icon.removeClass('far').addClass('fas');
        }
        else {
            like_icon.removeClass('fas').addClass('far');
        }
    });


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
        //console.log('enter');
        const forced_playlist_cover_image = $(this).find('.playlist_cover_image');
        const forced_playlist_cover_play_icon = $(this).find('.playlist_play_icon');
        forced_playlist_cover_image.toggleClass('cover_forced');
        forced_playlist_cover_play_icon.show();
    });

    $('#content-area').on('mouseleave', '.playlist_cover_in_detail_page', function () {
        //console.log('leave');
        const forced_playlist_cover_image = $(this).find('.playlist_cover_image');
        forced_playlist_cover_image.toggleClass('cover_forced');
        const forced_playlist_cover_play_icon = $(this).find('.playlist_play_icon');
        forced_playlist_cover_play_icon.hide();
    });
});