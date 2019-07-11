var loginButton = document.getElementById("loginbtn");
var signupButton = document.getElementById("signupbtn");
var authWindow = document.getElementById("authentication");
var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");

loginButton.onclick = function() {
	authWindow.style.display = "block";
	registerForm.style.display = "none";
	loginForm.style.display = "block";
}

signupButton.onclick = function() {
	authWindow.style.display = "block";
	loginForm.style.display = "none";
	registerForm.style.display = "block";
}

// When the user clicks somewhere outside, close the authentication window
window.onclick = function(event) {
	if (event.target == authWindow) {
		loginForm.style.display = "none";
		registerForm.style.display = "none";
		authWindow.style.display = "none";
	}
}

$(document).ready(function(){
  $("#togglebutton").click(function(){  
      $('#sidebar').animate({
        width: 'toggle'
      });
  });
});