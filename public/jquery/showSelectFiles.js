$(document).ready(function(){
	$('#sf').change(function(e){
		var i = 0;
		while (e.target.files[i] !== undefined){
			$('#filelist').append("<div class='addedFile'></div>");
			$('.addedFile:eq('+i+')').html(e.target.files[i].name);
			i += 1;
		}
		$('.addedFile').slice(i).remove();
	});
});