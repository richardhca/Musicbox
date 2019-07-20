$(document).ready(function () {
    contentAreaScrollable();
});

function contentAreaScrollable() {
    const tool_bar_height = $('#tool-bar').innerHeight();
    const music_player_area_height = $('.music-player-area').innerHeight();
    const sidebar_width = $('#sidebar').innerWidth();
    $('#tool-bar').css({'left': sidebar_width});
    $('#content-area').css({
                               'left': sidebar_width,
                               'top': tool_bar_height,
                               'bottom': music_player_area_height
                           });

}