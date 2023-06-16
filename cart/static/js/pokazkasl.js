
var infoSlide1 = [
	"/static/img/fonik.jpg",
	"/static/img/gielda.jpg",
	"/static/img/kable.jpg",
	"/static/img/city.jpg"
	];




$(document).ready(function() {
	
	$('#fotka5').hide();
	$('#fotka6').hide();
	
	/*$('#gogo').click( function() {
		var newImage1 = new Image();
		newImage1 = $('#img-fot2').attr('src');
		var newImage2 = new Image();
		newImage2 = $('#img-fot3').attr('src');
		var newImage3 = new Image();
		var newImage3 = $('#img-fot4').attr('src');
		var newImage4 = new Image();
		var newImage4 = $('#img-fot1').attr('src');
		
		$('#img-fot1').attr('src', newImage1);
		$('#img-fot2').attr('src', newImage2);
		$('#img-fot3').attr('src', newImage3);
		$('#img-fot4').attr('src', newImage4);
		
		
	});
	
	
					
	
	for (var i = 0; i<fotky.length; i++) {
		var elFoto = [];
		elFoto[i] = $('#fotka[i]');
	};*/
	
	var elFoto = [ $('#fotka1'),
		$('#fotka2'),
		$('#fotka3'),
		$('#fotka4'),
		$('#fotka5'),
		$('#fotka6') ]
	
	$('#gogo').click( function(i) {
		
		k = 1;
		i = 0;
		
		
		var elFotoFirst = elFoto[0+i];
		var elFotoLast = elFoto[4+i];
		elFotoFirst.hide();
		elFotoLast.show();
		 
		i = i+1;
		
		
		
	});
	
	
	
	
	
	
	
});