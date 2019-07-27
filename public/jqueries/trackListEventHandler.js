$(document).ready(function () {
    $('.track_list').on('mouseover', function () {
        const forced_music_icon = $(this).find('.tracklist_icon');
        if (forced_music_icon.html().includes('music_note')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">play_arrow</i>');
        }
        else if (forced_music_icon.html().includes('volume_up')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">pause</i>');
        }
    });

    $('.track_list').on('mouseout', function () {
        const forced_music_icon = $(this).find('.tracklist_icon');
        if (forced_music_icon.html().includes('play_arrow')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">music_note</i>');
        }
        else if (forced_music_icon.html().includes('pause')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">volume_up</i>');
        }
    });

    $('.track_list').on('dblclick', function (event) {
        event.preventDefault();

        // replace icon
        const forced_music_icon = $(this).find('.tracklist_icon');
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
            const icon = $(this).find('.tracklist_icon');
            // console.log(html_beautify($(this).html()));
            if (icon.html().includes('volume_up')) {
                icon.html('<i class="material-icons text-white noselect">music_note</i>');
                $(this).toggleClass('playing');
            }
        });
    });
});