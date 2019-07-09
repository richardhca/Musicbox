$(document).ready(function(){
  $("#togglebutton").click(function(){
	var toggleWidth = $("#sidebar").width() == 145 ? "15px" : "145px";
    $('#sidebar').animate({
      width: toggleWidth
    });
  });
});