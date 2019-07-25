$(document).ready(function () {
    $('#sf').change(function (e) {
        console.log('sf change');
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

    // $('#closeUploadPane').click(function () {
    //     $('.addedFile').remove();
    //     $('#uploadpane').css('display', 'none');
    // });

    // const socket = $('#test1').click(function () {
    //     const socket = io('//localhost:3000');
    //     return socket;
    // });

    $('#test2').click(function () {
        console.log('test click');
        const socket = io('//localhost:3000');
        socket.on('pencent', function (data) {
            console.log(data);
            if (data === '10') {
                socket.close();
            }
            // socket.emit('my other event', {my: 'data'});
        });

    });


    $('#uploadfiles').click(function () {
        var $fileUpload = $('#sf');
        if (parseInt($fileUpload.get(0).files.length) > 10) {
            alert('You can only upload a maximum of 10 files');
        }
        else if (parseInt($fileUpload.get(0).files.length) === 0) {
            alert('Please select some tracks');
        }
        else {
            // const socket = io.connect('//localhost:3000');
            // socket.on('news', function (data) {
            //     console.log(data);
            //     socket.emit('my other event', {my: 'data'});
            // });

            var form = $('#uf')[0];
            var formData = new FormData(form);

            $('.toast').toast('show');
            // for (var value of formData.values()) {
            //     tracks_upload(formData);
            // }
            // tracks_upload(formData);
            // console.log(formdata.get('track0'));

            // $('body').removeClass('modal-open');
            // $('.modal-backdrop').remove();
        }
    });

    function tracks_upload(formData) {
        $.ajax({
            type: 'POST',
            url: '/upload',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (result) {
                console.log(result);
                tracks_detail('GET');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });

    }

    function tracks_detail(type) {
        $.ajax({
            type: 'GET',
            url: '/track',
            dataType: 'html',
            data: {info: 'ajax, tracks detail', type: type},
            success: function (result) {
                $('#tool-bar')
                    .html($(result).filter('#track_tool_bar'));
                $('#content-area')
                    .html($(result).filter('#track_detail'));
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
    }
});