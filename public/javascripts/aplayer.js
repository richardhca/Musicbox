const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: 'grey',
    loop: 'none',
    order: 'list',
    preload: 'none',
    volume: 0.5,
    mutex: true,
    // listFolded: true,
    // listMaxHeight: 90,
    // lrcType: 3,
    audio: []
});

function loadPlaylist(data){
	var playlist = JSON.parse(data);
	if (playlist.length === 0) {
		alert("You have loaded an empty playlist");
	}
	else {
		ap.list.clear();
		ap.list.add(playlist);
		ap.play();
	}
}

