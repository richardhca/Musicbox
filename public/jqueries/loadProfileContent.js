$(document).ready(function () {
	$('#profile_button').on('click', function (event) {
		event.preventDefault();
		profile_get();
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