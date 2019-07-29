$(document).ready(function () {
    let uploadFiles = null;

    $('#upload_icon').on('click', function (event) {
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

    $('#uploadpane').on('shown.bs.modal', function () {
        console.log('upload pane shown');
        $('.progress-bar').css('width', '0%').text('0 %');
        // console.log($('#sf').get(0).files.length);
    });

    $('#uploadpane').on('hidden.bs.modal', function () {
        $('.addedFile').remove();
        console.log('upload pane hidden');
        // console.log($('#sf').get(0).files.length);
        console.log('upload pane files clearing');
        $('#sf').wrap('<form>').closest('form').get(0).reset();
        // console.log($('#sf').get(0).files.length);
        window.history.pushState(null, null, '/track');
    });

    $('#sf').on('change', function (e) {
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

    $('#uploadfiles').on('click', function () {
        console.log('upload button in pane click');
        const files = $('#sf').get(0).files;
        const files_len = files.length;

        if (files_len > 10) {
            alert('You can only upload a maximum of 10 files');
        }
        else if (files_len === 0) {
            alert('Please select some tracks');
        }
        else {
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
        }
    });

    $('.toast').on('animationend', function () {
        if ($(this).hasClass('fadeInRight')) {
            tracks_upload(uploadFiles);
        }
        else {
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
                tracks_page_get('GET');
                $('.toast').removeClass('fadeInRight fast')
                    .addClass('fadeOutRight delay-2s');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });

    }

    function tracks_page_get(type) {
        $.ajax({
            type: 'GET',
            url: '/track',
            dataType: 'html',
            data: {info: 'ajax, tracks page', type: type},
            success: function (result) {
                $('#tool-bar')
                    .html($(result).filter('#track_page_tool_bar'));
                $('#content-area')
                    .html($(result).filter('#track_page_detail'));

                $.getScript('/jqueries/uploadFormFeatures.js');
                $.getScript('/jqueries/trackListEventHandler.js');
                $.getScript('/jqueries/toggleIcon.js');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }
});