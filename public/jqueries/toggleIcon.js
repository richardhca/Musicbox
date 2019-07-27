$(document).ready(function () {
    $('.cta').on('click', function () {
        $(this).toggleClass('active');
        $('#sidebar').collapse('toggle');
    });
});

