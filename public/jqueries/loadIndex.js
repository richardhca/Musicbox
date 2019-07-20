$(document).ready(function () {
    $('body').removeClass('fade-out');
});

window.addEventListener("popstate", function(e) {
    const state = e.state;
    console.log(state);
});