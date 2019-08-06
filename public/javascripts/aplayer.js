const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    theme: 'grey',
    loop: 'none',
    order: 'list',
    preload: 'none',
    volume: 0.5,
    mutex: true,
    listFolded: true,
    listMaxHeight: 90,
    lrcType: 3,
    audio: []
});

function loadTrackPagelist() {
    var track_list = get_tracks();
    track_list = format_aplayer_tracks_data({tracks: track_list});
    ap.list.clear();
    ap.list.add(track_list);
}

function playTrackPageTracklist(idx) {
    loadTrackPagelist();
    ap.list.switch(idx);
    ap.play();
}

function playAlbumDetailPageTracklist(id) {
    var track = get_aplayer_track(id);
    console.log(track);
    ap.list.clear();
    ap.list.add(track);
    ap.play();
}

function playPlaylistDetailPageTracklist(id) {
    console.log(id);
    var track = get_aplayer_track(id);
    console.log(track);
    ap.list.clear();
    ap.list.add(track);
    ap.play();
}


// function rearrangeTracklist(track_list, idx) {
//     var index;
//     for (var i = 0; i < track_list.length; i++) {
//         if (parseInt(track_list[i].id, 10) === parseInt(idx, 10)) {
//             index = i;
//         }
//         delete track_list[i].id;
//     }
//     console.log(index);
//     var new_track_list = track_list.slice(index);
//     new_track_list = new_track_list.concat(track_list.slice(0, index));
//     return new_track_list;
// }

function loadPlaylist(data) {
    var playlist = JSON.parse(data);
    if (playlist.length === 0) {
        alert('You have loaded an empty playlist');
    }
    else {
        ap.list.clear();
        ap.list.add(playlist);
        if (playlist.length > 1) {
            ap.play();
        }
    }
}

function playToggle() {
    ap.toggle();
}

ap.on('canplay', function () {
    const idx = ap.list.index;
    changePlayingTrackUI(idx);
});

function changePlayingTrackUI(idx) {
    const index = idx + 2;
    var selector = '#track_page_track_list .track_list:nth-child(' + index + ')';
    selector = $(selector);
    selector.addClass('playing');
    const forced_music_icon = selector.find('.track_list_icon');
    forced_music_icon.html('<i class="material-icons text-white noselect">volume_up</i>');
    selector.siblings('.track_list').each(function () {
        const icon = $(this).find('.track_list_icon');
        // console.log(html_beautify($(this).html()));
        if (icon.html().includes('volume_up')) {
            icon.html('<i class="material-icons text-white noselect">music_note</i>');
            $(this).removeClass('playing');
        }
    });
}

function addTracksToList(data) {
    ap.list.add(data);
}

function keepTackPagePlayingView() {
    const idx = ap.list.index;
    changePlayingTrackUI(idx);
}

ap.on('ended', function () {
    console.log('ended!!!!!!!!!!!!!!!!!');
    console.log(ap.audio.currentSrc);
    console.log(ap.audio.src);
});

$(document).ready(function () {
    $('#test').on('click', function () {
        console.log(ap.list.index);
        console.log(ap.list);
    });
});