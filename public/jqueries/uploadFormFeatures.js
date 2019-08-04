$(document).ready(function () {
    let uploadFiles = null;

    $('#tool-bar').on('click', '#upload_icon', function (event) {
        event.preventDefault();
        if ($('#upload_icon').hasClass('isDisabled')) {
            console.log('upload icon clicked, uploading...');
        }
        else {
            console.log('upload icon click');
            $('#uploadpane').modal('show');
            //window.history.pushState(null, null, '/track/#upload');
        }
    });

    $('#tool-bar').on('shown.bs.modal', '#uploadpane', function () {
        console.log('upload pane shown');
        $('.progress-bar').css('width', '0%').text('0 %');
        console.log($('#sf').get(0).files.length);
    });

    $('#tool-bar').on('hidden.bs.modal', '#uploadpane', function () {
        $('.addedFile').remove();
        console.log('upload pane hidden');
        console.log($('#sf').get(0).files.length);
        console.log('upload pane files clearing');
        $('#sf').wrap('<form>').closest('form').get(0).reset();
        console.log($('#sf').get(0).files.length);
        window.history.pushState(null, null, '/track');
    });

    $('#tool-bar').on('change', '#sf', function (e) {
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

    $('#tool-bar').on('click', '#uploadfiles', function () {
        console.log('upload button in pane click!!!!!!');
        const files = $('#sf').get(0).files;
        const files_len = files.length;
        console.log('files length is : ', files_len);

        if (files_len > 10) {
            alert('You can only upload a maximum of 10 files');
        }
        else if (files_len === 0) {
            alert('Please select some tracks');
        }
        else {
            var fileSizesWithinLimits = true;

            $.each(files, (index, file) => {
                // If file size > 50mb
               if (file.size > 50000000) fileSizesWithinLimits = false;
            });

            // If one of files > 50mb, alert user and don't upload.
            if (fileSizesWithinLimits) {
                $('#upload_icon').addClass('isDisabled');
                var formData = new FormData();
                for (var i = 0; i < files_len; i++) {
                    const file = files[i];
                    // !important, name must be tracks!!
                    formData.append('tracks', file);
                }
                // keep play icon
                var idx = 0;
                $('.tracklist_icon').each(function (index) {
                    if ($(this).html().includes('play_arrow')) {
                        idx = index;
                    }
                });

                uploadFiles = formData;

                $('#uploadpane').modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();

                // toast show
                $('#spinner').show();
                $('#complete').hide();
                $('.toast').removeClass('delay-2s fadeOutRight')
                    .addClass('fadeInRight fast');
            } else {
                alert('Max file size is 50mb per file.');
            }
        }
    });

    $('.music-player-area').on('animationend', '.toast', function () {
        if ($(this).hasClass('fadeInRight')) {
            tracks_upload(uploadFiles);
        }
        else {
            uploadFiles = null;
        }

    });

    function tracks_upload(formData) {
        $.ajax({
            method: 'POST',
            url: '/upload',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            xhr: function () {
                const xhr = new window.XMLHttpRequest();

                xhr.upload.addEventListener('progress', function (event) {
                    if (event.lengthComputable) {
                        var percent = event.loaded / event.total;
                        percent = Math.round(percent * 100);
                        // console.log(percent);
                        $('.progress-bar').css('width', percent + '%')
                            .text(percent + ' %');
                    }
                });

                return xhr;
            },
            success: function (result) {
                $('#spinner').hide();
                $('#complete').show();
                $('#upload_icon').removeClass('isDisabled');
                track_page_get();
                $('.toast').removeClass('fadeInRight fast')
                    .addClass('fadeOutRight delay-2s');

            },
            error: function (e) {
                console.log('error: ', e);
            }
        });

    }
});