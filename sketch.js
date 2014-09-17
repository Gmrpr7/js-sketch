$(document).ready(function() {
	for (var divInt = 0; divInt < 256; divInt++) {	
		$('#container').append('<div></div>');
	}
	$('#container div').mouseenter(function(){
		$(this).css("background-color","black");
	});

	$('button').click(function(){
		$('#container').empty();
		var dim = prompt("How many squares per side do you want in the new grid?");
		for (var i = 0; i < dim * dim; i++) {	
			$('#container').append('<div></div>');
		}
		$('#container div').css("height", 960/dim);
		$('#container div').css("width", 960/dim);
		$('#container div').mouseenter(function(){
			$(this).css("background-color","black");
		});

	});
});	