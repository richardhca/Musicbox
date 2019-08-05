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

function loadTrackPageTracklist(idx) {
    var track_list = get_tracks();
    track_list = format_aplayer_tracks_data({tracks: track_list});
    console.log(track_list);
    const new_track_list = rearrangeTracklist(track_list, idx);
    ap.list.clear();
    ap.list.add(new_track_list);
    playToggle();
}


function rearrangeTracklist(track_list, idx) {
    var index;
    for (var i = 0; i < track_list.length; i++) {
        if (parseInt(track_list[i].id, 10) === parseInt(idx, 10)) {
            index = i;
        }
        delete track_list[i].id;
    }
    console.log(index);
    var new_track_list = track_list.slice(index);
    new_track_list = new_track_list.concat(track_list.slice(0, index));
    return new_track_list;
}

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

ap.on('ended', function () {
    console.log('ended!!!!!!!!!!!!!!!!!');
});