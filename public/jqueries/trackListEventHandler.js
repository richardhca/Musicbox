$(document).ready(function () {
    // $('.track_list_more_icon').hide();

    $('.track_list').on('mouseenter', function () {
        // console.log('mouse enter');
        const forced_music_icon = $(this).find('.track_list_icon');
        if (forced_music_icon.html().includes('music_note')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">play_arrow</i>');
        }
        else if (forced_music_icon.html().includes('volume_up')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">pause</i>');
        }

        forced_track_area = $(this);
        if (forced_track_area.hasClass('track_hover')) {
        }
        else {
            forced_track_area.addClass('track_hover');
        }

        forced_more_icon = forced_track_area.find('.track_list_more_icon');
        if (forced_more_icon.hasClass('hidden_icon')) {
            forced_more_icon.removeClass('hidden_icon')
        }
        else {
        }
        // $(this).toggleClass('track_hover');
        // $(this).find('.track_list_more_icon').toggle();
    });

    $('.track_list').on('mouseleave', function () {
        // console.log('mouse leave');
        const forced_music_icon = $(this).find('.track_list_icon');
        if (forced_music_icon.html().includes('play_arrow')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">music_note</i>');
        }
        else if (forced_music_icon.html().includes('pause')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">volume_up</i>');
        }

        forced_track_area = $(this);
        if (forced_track_area.hasClass('track_hover')) {
            forced_track_area.removeClass('track_hover');
        }
        else {
        }

        forced_more_icon = forced_track_area.find('.track_list_more_icon');
        if (forced_more_icon.hasClass('hidden_icon')) {

        }
        else {
            forced_more_icon.addClass('hidden_icon')
        }
        // $(this).toggleClass('track_hover');
        // $(this).find('.track_list_more_icon').css('display', 'none');
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