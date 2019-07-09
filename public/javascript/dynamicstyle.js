$(document).ready(function(){
  $("#togglebutton").click(function(){  
      $('#sidebar').animate({
        width: 'toggle'
      });
  });
});