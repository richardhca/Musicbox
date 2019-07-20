const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'none',
    order: 'list',
    preload: 'none',
    volume: 0.5,
    mutex: true,
    listFolded: true,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'The Next Episode (Instrumental Version)',
            artist: 'Dr. Dre',
            url: 'http://www.hipstrumentals.com/wp-content/uploads/2017/06/Dr.-Dre-Ft.-Snoop-Dogg-The-Next-Episode-Instrumental-Prod.-By-Dr.-Dre.mp3',
            cover: 'https://m.waploaded.com/music/uploads/2017/06/[Waploaded]_Dr_Dre_-_The_Next_Episode_Ft._Snoop_Dogg_(Prod._By_Dr._Dre)-1497610761.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ffffff'
        },
        {
            name: 'Breath and Life',
            artist: 'Audiomachine',
            url: 'useruploads/Breath and Life (Extended Version).mp3',
            cover: 'https://i.ytimg.com/vi/C0xZ-H2KYWw/maxresdefault.jpg',
            lrc: 'lrc2.lrc',
            theme: '#ffffff'
        }
    ]
});