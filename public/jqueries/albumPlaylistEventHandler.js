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

    $('.album_cover_in_detail_page').on('mouseenter', function () {
        console.log('enter');
        const forced_album_cover_image = $(this).find('.album_cover_image');
        const forced_album_cover_play_icon = $(this).find('.album_play_icon');
        forced_album_cover_image.toggleClass('cover_forced');
        forced_album_cover_play_icon.show();
    });

    $('.album_cover_in_detail_page').on('mouseleave', function () {
        console.log('leave');
        const forced_album_cover_image = $(this).find('.album_cover_image');
        forced_album_cover_image.toggleClass('cover_forced');
        const forced_album_cover_play_icon = $(this).find('.album_play_icon');
        forced_album_cover_play_icon.hide();
    });

    $('#like_icon').on('click', function () {
        const like_icon = $(this);
        if (like_icon.hasClass('far')) {
            like_icon.removeClass('far').addClass('fas');
        }
        else {
            like_icon.removeClass('fas').addClass('far');
        }
    });
});