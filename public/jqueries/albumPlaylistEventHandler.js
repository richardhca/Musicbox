$(document).ready(function () {
    $('.album_cover').on('mouseenter', function () {
        const forced_album_cover_image = $(this).find('.album_cover_image');
        const forced_album_cover_play_icon = $(this).find('.album_play_icon');
        forced_album_cover_image.toggleClass('cover_forced');
        forced_album_cover_play_icon.toggle();
    });

    $('.album_cover').on('mouseleave', function () {
        const forced_album_cover_image = $(this).find('.album_cover_image');
        forced_album_cover_image.toggleClass('cover_forced');
        const forced_album_cover_play_icon = $(this).find('.album_play_icon');
        forced_album_cover_play_icon.toggle();
    });
});