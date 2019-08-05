$(document).ready(function () {
    enabletracklistPlay();
});

function enabletracklistPlay() {
    $('#content-area').on('mouseenter', '.track_list', function () {
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
            forced_more_icon.removeClass('hidden_icon');
        }
        else {
        }
    });

    $('#content-area').on('mouseleave', '.track_list', function () {
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
            forced_more_icon.addClass('hidden_icon');
        }
        // $(this).toggleClass('track_hover');
        // $(this).find('.track_list_more_icon').css('display', 'none');
    });

    // var prevIndex = -1;
    // var sameTrack = false;
    $('#content-area').on('click', '.track_list', function (event) {
        event.preventDefault();
        // var trackIndex = $('.track_list').index(this);
        // sameTrack = (trackIndex === prevIndex);
        // prevIndex = trackIndex;
        // var trackName = $('.track_list_title').eq(trackIndex).text(); // Get the filename
        // var trackTitle = trackName.substring(0, trackName.length - 4); // Get rid of extension
        // var trackArtist = $('.track_list_artist').eq(trackIndex).text();
        // var trackFilename = $('.track_list_filename').eq(trackIndex).text();
        // var trackCover = $('.track_list_cover').eq(trackIndex).text();
        // var trackLyric = $('.track_lyric').eq(trackIndex).text();
        // // Create track object
        // var trackObject = '{"name": "' + trackTitle + '", '
        //     + '"artist": "' + trackArtist + '", '
        //     + '"url": "../tracks/' + trackFilename + '", ';
        // if (trackCover !== 'None') {
        //     trackObject += '"cover": "../covers/' + trackCover + '", ';
        // }
        // trackObject += '"lrc": "' + trackLyric + '", "theme": "#ffffff"}';
        //
        // if (!sameTrack) {
        //     loadPlaylist(trackObject);
        // }

        // replace icon
        const forced_music_icon = $(this).find('.track_list_icon');

        // playing
        if (forced_music_icon.html().includes('play_arrow')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">pause</i>');
            const idx = $('.track_list').index(this);
            playTrackPageTracklist(idx);
            // playToggle();
        }
        // pause to playing
        else if (forced_music_icon.html().includes('pause')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">play_arrowe</i>');
            playToggle();
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
}

function disenabletracklistPlay() {
    $('#content-area').off('mouseenter', '.track_list');

    $('#content-area').off('mouseleave', '.track_list');

    $('#content-area').off('click', '.track_list');
}
