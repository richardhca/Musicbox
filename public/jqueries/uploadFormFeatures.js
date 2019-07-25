$(document).ready(function () {
    $('#sf').change(function (e) {
        var i = 0;
        while (e.target.files[i] !== undefined) {
            if (i === 10) {
                break;
            }
            $('#filelist').append('<div class=\'addedFile\'></div>');
            $('.addedFile:eq(' + i + ')').html(e.target.files[i].name);
            i += 1;
        }
        $('.addedFile').slice(i).remove();
    });
    $('#closeUploadPane').click(function () {
        $('.addedFile').remove();
        $('#uploadpane').css('display', 'none');
    });
    $('#uploadfiles').click(function () {
        var $fileUpload = $('#sf');
        if (parseInt($fileUpload.get(0).files.length) > 10) {
            alert('You can only upload a maximum of 10 files');
        }
        else {
            $('#uf').submit();
			
        }
    });
});