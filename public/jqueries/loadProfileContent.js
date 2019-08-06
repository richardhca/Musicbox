$(document).ready(function () {
	//$('#profile_button').on('click', function (event) {
	///	event.preventDefault();
	//	profile_get();
	//});
	
	$('#editProfile').on('click', function () {
		$('.userinfo').prop('disabled', false);
		$('#saveEdit').css('display', 'inline-block');
		$('#editProfile').css('display', 'none');
		$('#changePw').css('display', 'none');
		$('#cancel').css('display', 'inline-block');
	});
	
	$('#saveEdit').on('click', function () {
		$('.userinfo').prop('disabled', true);
		$('#editProfile').css('display', 'inline-block');
		$('#saveEdit').css('display', 'none');
		$('#changePw').css('display', 'inline-block');
		$('#cancel').css('display', 'none');
		$('#profileForm').submit();
	});
	
	$('#changePw').on('click', function () {
		$('.profile_info').css('display', 'none');
		$('.profile_changePw').css('display', 'block');
		$('#editProfile').css('display', 'none');
		$('#changePw').css('display', 'none');
		$('#savePw').css('display', 'inline-block');
		$('#cancel').css('display', 'inline-block');
	});
	
	$('#savePw').on('click', function () {
		$('.profile_changePw').css('display', 'none');
		$('.profile_info').css('display', 'block');
		$('#editProfile').css('display', 'inline-block');
		$('#changePw').css('display', 'inline-block');
		$('#savePw').css('display', 'none');
		$('#cancel').css('display', 'none');
		$('#passwordForm').submit();
	});
	
	$('#cancel').on('click', function () {
		$('.userinfo').prop('disabled', true);
		$('.profile_changePw').css('display', 'none');
		$('.profile_info').css('display', 'block');
		$('#editProfile').css('display', 'inline-block');
		$('#saveEdit').css('display', 'none');
		$('#changePw').css('display', 'inline-block');
		$('#savePw').css('display', 'none');
		$('#cancel').css('display', 'none');
	});
	
	function profile_get() {
        $.ajax({
            type: 'GET',
            url: '/user/profile',
            dataType: 'json',
            data: {info: 'ajax, profile page', type: 'GET'},
            success: function (data) {
                const html = profileTemplate({profile: data.profile});
                $('#content-area').html(html);
                window.history.pushState(null, null, '/user/profile');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
	}
});