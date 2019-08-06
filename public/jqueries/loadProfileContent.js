$(document).ready(function () {
	console.log('load profile');
	$('#profile_button').on('click', function (event) {
		event.preventDefault();
		alert('ajax load profile');
		profile_page_get();
	}
	
	function profile_page_get() {
        $.ajax({
            type: 'GET',
            url: '/profile',
            dataType: 'json',
            data: {info: 'ajax, profile page', type: 'GET'},
            success: function (data) {
                const html = profileTemplate({profile: data.profile});
                $('#content-area').html(html);
                window.history.pushState(null, null, '/profile');
            },
            error: function (e) {
                console.log('error: ', e);
            }
        });
	}
}