
var infoSlide1 = [
	"/static/img/fonik.jpg",
	"/static/img/gielda.jpg",
	"/static/img/kable.jpg",
	"/static/img/city.jpg"
	];




$(document).ready(function() {
	
	$('#menu-icon').hide().delay(1000).fadeIn(500);
	$('#right-kont').hide().delay(200).slideDown(800);
	
	$('#left-kont').hide().css('height', '0px' );
	$('#left-kont').css('margin-top', '670px' );
	$('#left-kont').delay(200).show(0).animate(
	{
		'height': '670px',
		'margin-top': '0px' 
	}, 800 );
	
	
	
	
	$('#menu-expoz').hide().css('margin-left', '100%');
	$('#menu-icon').click(function () {
		$('#menu-expoz').slideDown();
		$('#menu-expoz').animate(
		{
			'margin-left': '0%'	
		}, 1000 );
		$(this).fadeOut(500);
	});
	$('#menu-icon-out').click(function () {
		/*$('#menu-expoz').animate(
		{
			'margin-left': '100%'	
		}, 2000 );*/
		$('#menu-expoz').slideUp(600, function() {
			
			$(this).css('margin-left', '100%');
			
			});
		
		
		$('#menu-icon').fadeIn(500);
	});
	

});