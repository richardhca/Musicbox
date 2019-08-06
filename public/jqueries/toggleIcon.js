$(document).ready(function () {
    $('#tool-bar').on('click', '.cta', function () {
        $(this).toggleClass('active');
        $('#sidebar').collapse('toggle');
    });
});

