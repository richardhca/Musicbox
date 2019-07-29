$(document).ready(function () {
    // $('.track_list_more_icon').hide();

    $('.track_list').on('mouseenter', function () {
        // console.log('mouse enter');
        const forced_music_icon = $(this).find('.track_list_music_status_icon_col');
        if (forced_music_icon.html().includes('music_note')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">play_arrow</i>');
        }
        else if (forced_music_icon.html().includes('volume_up')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">pause</i>');
        }

        const forced_track_area = $(this);
        if (forced_track_area.hasClass('track_hover')) {
        }
        else {
            forced_track_area.addClass('track_hover');
        }

        const forced_more_icon = forced_track_area.find('.track_list_more_icon');
        if (forced_more_icon.hasClass('hidden_icon')) {
            forced_more_icon.removeClass('hidden_icon');
        }
        else {
        }
        // $(this).toggleClass('track_hover');
        // $(this).find('.track_list_more_icon').toggle();
    });

    $('.track_list').on('mouseleave', function () {
        // console.log('mouse leave');
        const forced_music_icon = $(this).find('.track_list_music_status_icon_col');
        if (forced_music_icon.html().includes('play_arrow')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">music_note</i>');
        }
        else if (forced_music_icon.html().includes('pause')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">volume_up</i>');
        }

        const forced_track_area = $(this);
        if (forced_track_area.hasClass('track_hover')) {
            forced_track_area.removeClass('track_hover');
        }
        else {
        }

        const forced_more_icon = forced_track_area.find('.track_list_more_icon');
        if (forced_more_icon.hasClass('hidden_icon')) {

        }
        else {
            forced_more_icon.addClass('hidden_icon');
        }
        // $(this).toggleClass('track_hover');
        // $(this).find('.track_list_more_icon').css('display', 'none');
    });

    $('.track_list').on('click', function (event) {
        event.preventDefault();
        console.log('click');
    });

    var ap_option = {
        container: document.getElementById('aplayer'),
        // mini: false,
        // autoplay: false,
        loop: 'all',
        order: 'random',
        preload: 'none',
        volume: 0.5,
        audio: []
    };

    $('.track_list').on('dblclick', function (event) {
        event.preventDefault();


        const url = $(this).attr('href').split(',');
        const track_url = url[0];
        const track_cover = url[1];
        const track_name = $(this).find('.track_name').text();
        const track_artist = $(this).find('.track_artist').text();
        console.log(url);
        console.log(track_cover);
        console.log(track_name);
        console.log(track_artist);

        ap_option.audio[0] = {
            name: track_name,
            artist: track_artist,
            theme: 'grey',
            url: track_url,
            cover: track_cover,
        };

        const ap = new APlayer(ap_option);
        ap.toggle();

        // replace icon
        const forced_music_icon = $(this).find('.track_list_music_status_icon_col');
        // const pretty = html_beautify(forced_music_icon.html());
        // console.log(pretty);
        // stop to playing
        if (forced_music_icon.html().includes('play_arrow')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">pause</i>');
            ap.play();
        }
        // pause to playing
        else if (forced_music_icon.html().includes('pause')) {
            forced_music_icon.html('<i class="material-icons text-white noselect">play_arrowe</i>');
            ap.pause();
        }
        // else {
        //     forced_music_icon.html('<i class="material-icons text-white noselect">music_note</i>');
        // }

        $(this).toggleClass('playing');

        // change playicon to music icon
        $(this).siblings('.track_list').each(function () {
            const icon = $(this).find('.track_list_music_status_icon_col');
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