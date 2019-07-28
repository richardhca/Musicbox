$(document).ready(function () {
    // $('.track_list_more_icon').hide();

    console.log('document ready');

    $('.track_list').on('mouseenter', function () {
        console.log('mouse enter');
        const forced_music_icon = $(this).find('.track_list_icon');
        if (forced_music_icon.html().includes('music_note')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">play_arrow</i>');
        }
        else if (forced_music_icon.html().includes('volume_up')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">pause</i>');
        }
        $(this).toggleClass('track_hover');
        $(this).find('.track_list_more_icon').toggle();
    });

    $('.track_list').on('mouseleave', function () {
        console.log('mouse leave');
        const forced_music_icon = $(this).find('.track_list_icon');
        if (forced_music_icon.html().includes('play_arrow')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">music_note</i>');
        }
        else if (forced_music_icon.html().includes('pause')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">volume_up</i>');
        }
        $(this).toggleClass('track_hover');
        $(this).find('.track_list_more_icon').toggle();
    });

    $('.track_list').on('dblclick', function (event) {
        event.preventDefault();

        // replace icon
        const forced_music_icon = $(this).find('.track_list_icon');
        // const pretty = html_beautify(forced_music_icon.html());
        // console.log(pretty);

        // stop to playing
        if (forced_music_icon.html().includes('play_arrow')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">pause</i>');
        }
        // pause to playing
        else if (forced_music_icon.html().includes('pause')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">play_arrowe</i>');
        }
        // else {
        //     forced_music_icon.html('<i class="material-icons text-white noselect">music_note</i>');
        // }

        $(this).toggleClass('playing');

        // change playicon to music icon
        $(this).siblings('.track_list').each(function () {
            const icon = $(this).find('.track_list_icon');
            // console.log(html_beautify($(this).html()));
            if (icon.html().includes('volume_up')) {
                icon.html('<i class="material-icons text-white noselect">music_note</i>');
                $(this).toggleClass('playing');
            }
        });
    });

    // $('.track_list_more_icon').on('click', function () {
    //     console.log('more click');
    //     $('.dropdown-menu').toggle();
    // });
});