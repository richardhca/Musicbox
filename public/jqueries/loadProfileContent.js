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
		const lastname = $('#lastname').val();
		const firstname = $('#firstname').val();
		const email = $('#email').val();
		const birthday = $('#birthday').val();
		const formsubmit_url = $('#profileForm').attr('action');
		profile_edit_change(formsubmit_url, lastname, firstname, email, birthday);
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
		const oldpassword = $('#oldpassword').val();
		const newpassword = $('#newpassword').val();
		const confirmpassword = $('#confirmpassword').val();
		const formsubmit_url = $('#passwordForm').attr('action');
		password_change(formsubmit_url, oldpassword, newpassword, confirmpassword);
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
	
	function profile_edit_change(formsubmit_url, lastname, firstname, email, birthday){
		$.ajax({
			type: 'POST',
			url: formsubmit_url,
			dataType: 'json',
			data: {"email": email, "first_name": firstname, "last_name": lastname, "date_of_birth": birthday},
			success: function (data) {
				//console.log(data);
				profile_get(url);
			},
			error: function (e) {
				console.log('error: ', e);
			}
		});
	}
	
	function password_change(formsubmit_url, oldpassword, newpassword, confirmpassword){
		$.ajax({
			type: 'POST',
			url: formsubmit_url,
			dataType: 'json',
			data: {"oldPassword": oldpassword, "newPassword": newpassword, "confirmNewPassword": confirmpassword},
			success: function (data) {
				//console.log(data);
				profile_get(url);
			},
			error: function (e) {
				console.log('error: ', e);
			}
		});
	}
});