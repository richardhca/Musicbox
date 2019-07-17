$(document).ready(function () {
    resizeDiv();
});

window.onresize = function () {
    resizeDiv();
};

function resizeDiv() {
    // change height
    const vph = $(window).height();
    const music_player_area_height = $('.music-player-area').innerHeight();
    const main_area_height = vph - music_player_area_height;
    $('.main-area').css({'height': main_area_height});
    $('#sidebar').css({'height': main_area_height});
}