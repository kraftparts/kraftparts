
var infoSlide1 = [
	"/static/img/fonik.jpg",
	"/static/img/gielda.jpg",
	"/static/img/kable.jpg",
	"/static/img/city.jpg"
	];




$(document).ready(function() {
	
	$('#fotka5').hide();
	$('#fotka6').hide();
	
	
	
	var elFoto = [ $('#fotka1'),
		$('#fotka2'),
		$('#fotka3'),
		$('#fotka4'),
		$('#fotka5'),
		$('#fotka6') ]
	
	$('#gogo').click( function(i) {
		
		k = elFoto.length;
		l = k-4;
		i = 0;
		
		
		var elFotoFirst = elFoto[0+i];
		var elFotoLast = elFoto[4+i];
		elFotoFirst.hide();
		elFotoLast.show();
		 
		i = i+1;
		
		
		
	});
	
	
	
	
	
	
	
});