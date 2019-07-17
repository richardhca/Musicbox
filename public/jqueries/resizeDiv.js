$(document).ready(function () {
    $('body').removeClass('fade-out');
    resizeDiv();
});

window.onresize = function () {
    resizeDiv();
};

function resizeDiv() {
    const vpw = $(window).width();
    const vph = $(window).height();

    // change height
    const music_player_area_height = $('.music-player-area').height();
    const main_area_height = vph - music_player_area_height;
    $('.main-area').css({'height': main_area_height});
    $('#sidebar').css({'height': main_area_height});


}