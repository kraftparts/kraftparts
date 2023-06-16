
var infoSlide1 = [
	"Zakup gruntu pod inwestycje",
	"Zakup, budowa lub modernizacja nieruchomości",
	"Zakup, remont lub modernizacja środków trwałych"
	];




$(document).ready(function() {
	
	
	
	$('#menu-expoz').hide().css('margin-left', '100%');
	$('#menu-icon-out').hide();
	$('#menu-icon').hide();

	$('#menu-icon').delay(4000).slideDown(1900);
	
	$('#menu-icon').click(function () {
		$(this).fadeOut();
		$('#menu-expoz').slideDown();
		$('#menu-expoz').animate(
		{
			'margin-left': '0%'	
		}, 1000 );
		
		$(this).fadeOut(500);
		$('#menu-icon-out').show(2000);
	});
	$('#menu-icon-out').click(function () {
		/*$('#menu-expoz').animate(
		{
			'margin-left': '100%'	
		}, 2000 );*/
		$(this).slideUp(200);
		$('#menu-expoz').slideUp(900, function() {
			
			$(this).css('margin-left', '100%');
			
			});
		
		
		$('#menu-icon').slideDown(1500);
	});
	
	
	$('#inner-line1-signalbox-text-ff').hide();
	$('#inner-line1-signalbox-text-ff').css('width', '0px');
	$('#inner-line1-textbox-ff').hide();
	$('#inner-line1-leftbox-ff').hide();
	$('#inner-line1-rightbox1-ff').hide();
	$('#inner-line1-rightbox2-ff').hide();
	$('#inner-line1-rightbox3-ff').hide();
	$('#inner-line1-bottom-ff').hide();
	
	
	
	$('#inner-line2-signalbox-text-ff').hide();
	$('#inner-line2-signalbox-text-ff').css('width', '0px');
	$('#inner-line2-textbox-ff').hide();
	$('#inner-line2-leftbox-ff').hide();
	$('#inner-line2-rightbox1-ff').hide();
	$('#inner-line2-rightbox2-ff').hide();
	$('#inner-line2-rightbox3-ff').hide();
	$('#inner-line2-bottom-ff').hide();
	
	
	
	$('#inner-line3-signalbox-text-ff').hide();
	$('#inner-line3-signalbox-text-ff').css('width', '0px');
	$('#inner-line3-textbox-ff').hide();
	$('#inner-line3-leftbox-ff').hide();
	$('#inner-line3-rightbox1-ff').hide();
	$('#inner-line3-rightbox1-boxadd1-ff').hide();
	$('#inner-line3-rightbox1-boxadd2-ff').hide();
	$('#inner-line3-rightbox2-ff').hide();
	$('#inner-line3-rightbox3-ff').hide();
	$('#inner-line3-bottom-ff').hide();
	
	
	
	$('#inner-line4-signalbox-text-ff').hide();
	$('#inner-line4-signalbox-text-ff').css('width', '0px');
	$('#inner-line4-textbox-ff').hide();
	$('#inner-line4-leftbox-ff').hide();
	$('#inner-line4-rightbox1-ff').hide();
	$('#inner-line4-rightbox2-ff').hide();
	$('#inner-line4-rightbox3-ff').hide();
	$('#inner-line4-rightbox4-ff').hide();
	$('#inner-line4-bottom-ff').hide();
	
	
	
	$('#inner-line5-signalbox-text-ff').hide();
	$('#inner-line5-signalbox-text-ff').css('width', '0px');
	$('#inner-line5-textbox-ff').hide();
	$('#inner-line5-leftbox-ff').hide();
	$('#inner-line5-rightbox1-ff').hide();
	$('#inner-line5-rightbox2-ff').hide();
	$('#inner-line5-rightbox3-ff').hide();
	$('#inner-line5-bottom-ff').hide();
	
	
	
	$('#inner-line6-signalbox-text-ff').hide();
	$('#inner-line6-signalbox-text-ff').css('width', '0px');
	$('#inner-line6-textbox-ff').hide();
	$('#inner-line6-leftbox-ff').hide();
	$('#inner-line6-rightbox1-ff').hide();
	$('#inner-line6-rightbox2-ff').hide();
	$('#inner-line6-rightbox3-ff').hide();
	$('#inner-line6-bottom-ff').hide();
	
	
	
/***	$('#inner-line1-ff').mouseover(function () {
		
		$('#inner-line1-titlebox-ff').css('font-style', 'italic');
		$('#inner-line1-signalbox-text-ff').show(0);
		$('#inner-line1-signalbox-text-ff').animate(
		{
			'width': '60px'
		}, 500 );
	});
	
	$('#inner-line1-ff').mouseout(function () {
		
		$('#inner-line1-titlebox-ff').css('font-style', 'normal');
		
		$('#inner-line1-signalbox-text-ff').animate(
		{
			'width': '0px'
		}, 500 );
		$('#inner-line1-signalbox-text-ff').hide(0);
	}); ***/
	
	$('#inner-line1-titlebox-ff').hover(
		function () {
		
			$(this).css('font-style', 'italic');
			
		
		}, 
		function() {
			$(this).css('font-style', 'normal');
			
			
		}
	);
	
	
	$('#inner-line2-titlebox-ff').hover(
		function () {
		
			$(this).css('font-style', 'italic');
			
		
		}, 
		function() {
			$(this).css('font-style', 'normal');
			
			
		}
	);
	
	
	$('#inner-line3-titlebox-ff').hover(
		function () {
		
			$(this).css('font-style', 'italic');
			
		
		}, 
		function() {
			$(this).css('font-style', 'normal');
			
			
		}
	);
	
	
	$('#inner-line4-titlebox-ff').hover(
		function () {
		
			$(this).css('font-style', 'italic');
			
		
		}, 
		function() {
			$(this).css('font-style', 'normal');
			
			
		}
	);
	
	
	$('#inner-line5-titlebox-ff').hover(
		function () {
		
			$(this).css('font-style', 'italic');
			
		
		}, 
		function() {
			$(this).css('font-style', 'normal');
			
			
		}
	);
	
	
	$('#inner-line6-titlebox-ff').hover(
		function () {
		
			$(this).css('font-style', 'italic');
			
		
		}, 
		function() {
			$(this).css('font-style', 'normal');
			
			
		}
	);
	
	
	
	
	
	$('#inner-line1-titlebox-ff').click(function () {
		
		$(this).css('font-style', 'italic');
		$('#inner-line1-signalbox-text-ff').show(0);
		$('#inner-line1-ff').animate(
		{
			'height': '750px'
		}, 1500 );
		
		$('#inner-line1-textbox-ff').fadeIn(800);
		$('#inner-line1-leftbox-ff').fadeIn(500);
		$('#inner-line1-rightbox1-ff').delay(700).slideDown(800);
		$('#inner-line1-rightbox2-ff').delay(1400).slideDown(800);
		$('#inner-line1-rightbox3-ff').delay(2100).slideDown(800);
		$('#inner-line1-bottom-ff').delay(2100).slideDown(800);
		$('#inner-line1-signalbox-text-ff').animate(
		{
			'width': '60px'
		}, 1000 );
		
	}); 
	
	$('#inner-line1-bottom-box1-l1-ff').click(function () {
		
		$('#inner-line1-titlebox-ff').css('font-style', 'normal');
		$('#inner-line1-signalbox-text-ff').hide(0);
		$('#inner-line1-ff').animate(
		{
			'height': '105px'
		}, 1500 );
		
		$('#inner-line1-textbox-ff').slideUp(800);
		$('#inner-line1-leftbox-ff').slideUp(800);
		$('#inner-line1-rightbox1-ff').delay(400).slideUp(200);
		$('#inner-line1-rightbox2-ff').delay(200).slideUp(200);
		$('#inner-line1-rightbox3-ff').slideUp(200);
		$('#inner-line1-bottom-ff').slideUp(200);
		$('#inner-line1-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	$('#inner-line1-signalbox-text-ff').click(function () {
		
		$('#inner-line1-titlebox-ff').css('font-style', 'normal');
		
		$('#inner-line1-ff').animate(
		{
			'height': '105px'
		}, 1500 );
		
		$('#inner-line1-textbox-ff').slideUp(800);
		$('#inner-line1-leftbox-ff').slideUp(800);
		$('#inner-line1-rightbox1-ff').delay(400).slideUp(200);
		$('#inner-line1-rightbox2-ff').delay(200).slideUp(200);
		$('#inner-line1-rightbox3-ff').slideUp(200);
		$('#inner-line1-bottom-ff').slideUp(200);
		$('#inner-line1-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	
	
	$('#inner-line2-titlebox-ff').click(function () {
		
		$(this).css('font-style', 'italic');
		$('#inner-line2-signalbox-text-ff').show(0);
		$('#inner-line2-ff').animate(
		{
			'height': '750px'
		}, 1500 );
		
		$('#inner-line2-textbox-ff').fadeIn(800);
		$('#inner-line2-leftbox-ff').fadeIn(500);
		$('#inner-line2-rightbox1-ff').delay(700).slideDown(800);
		$('#inner-line2-rightbox2-ff').delay(1400).slideDown(800);
		$('#inner-line2-rightbox3-ff').delay(2100).slideDown(800);
		$('#inner-line2-bottom-ff').delay(2100).slideDown(800);
		$('#inner-line2-signalbox-text-ff').animate(
		{
			'width': '60px'
		}, 1000 );
		
	}); 
	
	$('#inner-line2-bottom-box1-l1-ff').click(function () {
		
		$('#inner-line2-titlebox-ff').css('font-style', 'normal');
		$('#inner-line2-signalbox-text-ff').hide(0);
		$('#inner-line2-ff').animate(
		{
			'height': '105px'
		}, 1000 );
		
		$('#inner-line2-textbox-ff').fadeOut(800);
		$('#inner-line2-leftbox-ff').fadeOut(800);
		$('#inner-line2-rightbox1-ff').fadeOut(700);
		$('#inner-line2-rightbox2-ff').fadeOut(600);
		$('#inner-line2-rightbox3-ff').fadeOut(500);
		$('#inner-line2-bottom-ff').fadeOut(400);
		$('#inner-line2-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	$('#inner-line2-signalbox-text-ff').click(function () {
		
		$('#inner-line2-titlebox-ff').css('font-style', 'normal');
		
		$('#inner-line2-ff').animate(
		{
			'height': '105px'
		}, 1500 );
		
		$('#inner-line2-textbox-ff').fadeOut(800);
		$('#inner-line2-leftbox-ff').fadeOut(800);
		$('#inner-line2-rightbox1-ff').fadeOut(700);
		$('#inner-line2-rightbox2-ff').fadeOut(600);
		$('#inner-line2-rightbox3-ff').fadeOut(500);
		$('#inner-line2-bottom-ff').fadeOut(400);
		$('#inner-line2-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	
	
	
	
	$('#inner-line3-titlebox-ff').click(function () {
		
		$(this).css('font-style', 'italic');
		$('#inner-line3-signalbox-text-ff').show(0);
		$('#inner-line3-ff').animate(
		{
			'height': '750px'
		}, 1500 );
		
		$('#inner-line3-textbox-ff').fadeIn(800);
		$('#inner-line3-leftbox-ff').fadeIn(500);
		$('#inner-line3-rightbox1-ff').delay(700).slideDown(800);
		$('#inner-line3-rightbox1-boxadd1-ff').delay(1200).slideDown(800);
		$('#inner-line3-rightbox1-boxadd2-ff').delay(1400).slideDown(800);
		$('#inner-line3-rightbox2-ff').delay(1400).slideDown(800);
		$('#inner-line3-rightbox3-ff').delay(2100).slideDown(800);
		$('#inner-line3-bottom-ff').delay(2100).slideDown(800);
		$('#inner-line3-signalbox-text-ff').animate(
		{
			'width': '60px'
		}, 1000 );
	
	}); 
	
	$('#inner-line3-bottom-box1-l1-ff').click(function () {
		
		$('#inner-line3-titlebox-ff').css('font-style', 'normal');
		$('#inner-line3-signalbox-text-ff').hide(0);
		$('#inner-line3-ff').animate(
		{
			'height': '105px'
		}, 1000 );
		
		$('#inner-line3-textbox-ff').fadeOut(800);
		$('#inner-line3-leftbox-ff').fadeOut(800);
		$('#inner-line3-rightbox1-ff').fadeOut(800);
		$('#inner-line3-rightbox1-boxadd1-ff').fadeOut(800);
		$('#inner-line3-rightbox1-boxadd2-ff').fadeOut(700);
		$('#inner-line3-rightbox2-ff').fadeOut(600);
		$('#inner-line3-rightbox3-ff').fadeOut(500);
		$('#inner-line3-bottom-ff').fadeOut(400);
		$('#inner-line3-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	$('#inner-line3-signalbox-text-ff').click(function () {
		
		$('#inner-line3-titlebox-ff').css('font-style', 'normal');
		
		$('#inner-line3-ff').animate(
		{
			'height': '105px'
		}, 1500 );
		
		$('#inner-line3-textbox-ff').fadeOut(800);
		$('#inner-line3-leftbox-ff').fadeOut(800);
		$('#inner-line3-rightbox1-ff').fadeOut(800);
		$('#inner-line3-rightbox1-boxadd1-ff').fadeOut(800);
		$('#inner-line3-rightbox1-boxadd2-ff').fadeOut(700);
		$('#inner-line3-rightbox2-ff').fadeOut(600);
		$('#inner-line3-rightbox3-ff').fadeOut(500);
		$('#inner-line3-bottom-ff').fadeOut(400);
		$('#inner-line3-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	
	
	
	$('#inner-line4-titlebox-ff').click(function () {
		
		$(this).css('font-style', 'italic');
		$('#inner-line4-signalbox-text-ff').show(0);
		$('#inner-line4-ff').animate(
		{
			'height': '785px'
		}, 1500 );
		
		$('#inner-line4-textbox-ff').fadeIn(800);
		$('#inner-line4-leftbox-ff').fadeIn(500);
		$('#inner-line4-rightbox1-ff').delay(700).slideDown(800);
		$('#inner-line4-rightbox2-ff').delay(1400).slideDown(800);
		$('#inner-line4-rightbox3-ff').delay(2100).slideDown(800);
		$('#inner-line4-rightbox4-ff').delay(2800).slideDown(800);
		$('#inner-line4-bottom-ff').delay(2100).slideDown(800);
		$('#inner-line4-signalbox-text-ff').animate(
		{
			'width': '60px'
		}, 1000 );
		
	}); 
	
	$('#inner-line4-bottom-box1-l1-ff').click(function () {
		
		$('#inner-line4-titlebox-ff').css('font-style', 'normal');
		$('#inner-line4-signalbox-text-ff').hide(0);
		$('#inner-line4-ff').animate(
		{
			'height': '105px'
		}, 1000 );
		
		$('#inner-line4-textbox-ff').fadeOut(800);
		$('#inner-line4-leftbox-ff').fadeOut(800);
		$('#inner-line4-rightbox1-ff').fadeOut(800);
		$('#inner-line4-rightbox2-ff').fadeOut(700);
		$('#inner-line4-rightbox3-ff').fadeOut(600);
		$('#inner-line4-rightbox4-ff').fadeOut(500);
		$('#inner-line4-bottom-ff').fadeOut(400);
		$('#inner-line4-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	$('#inner-line4-signalbox-text-ff').click(function () {
		
		$('#inner-line4-titlebox-ff').css('font-style', 'normal');
		
		$('#inner-line4-ff').animate(
		{
			'height': '105px'
		}, 1500 );
		
		$('#inner-line4-textbox-ff').fadeOut(800);
		$('#inner-line4-leftbox-ff').fadeOut(800);
		$('#inner-line4-rightbox1-ff').fadeOut(800);
		$('#inner-line4-rightbox2-ff').fadeOut(700);
		$('#inner-line4-rightbox3-ff').fadeOut(600);
		$('#inner-line4-rightbox4-ff').fadeOut(500);
		$('#inner-line4-bottom-ff').fadeOut(400);
		$('#inner-line4-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	
	
	
	
	$('#inner-line5-titlebox-ff').click(function () {
		
		$(this).css('font-style', 'italic');
		$('#inner-line5-signalbox-text-ff').show(0);
		$('#inner-line5-ff').animate(
		{
			'height': '750px'
		}, 1500 );
		
		$('#inner-line5-textbox-ff').fadeIn(800);
		$('#inner-line5-leftbox-ff').fadeIn(500);
		$('#inner-line5-rightbox1-ff').delay(700).slideDown(800);
		$('#inner-line5-rightbox2-ff').delay(1400).slideDown(800);
		$('#inner-line5-rightbox3-ff').delay(2100).slideDown(800);
		$('#inner-line5-bottom-ff').delay(2100).slideDown(800);
		$('#inner-line5-signalbox-text-ff').animate(
		{
			'width': '60px'
		}, 1000 );
		
	}); 
	
	$('#inner-line5-bottom-box1-l1-ff').click(function () {
		
		$('#inner-line5-titlebox-ff').css('font-style', 'normal');
		$('#inner-line5-signalbox-text-ff').hide(0);
		$('#inner-line5-ff').animate(
		{
			'height': '105px'
		}, 1000 );
		
		$('#inner-line5-textbox-ff').fadeOut(800);
		$('#inner-line5-leftbox-ff').fadeOut(800);
		$('#inner-line5-rightbox1-ff').fadeOut(700);
		$('#inner-line5-rightbox2-ff').fadeOut(600);
		$('#inner-line5-rightbox3-ff').fadeOut(500);
		$('#inner-line5-bottom-ff').fadeOut(400);
		$('#inner-line5-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	$('#inner-line5-signalbox-text-ff').click(function () {
		
		$('#inner-line5-titlebox-ff').css('font-style', 'normal');
		
		$('#inner-line5-ff').animate(
		{
			'height': '105px'
		}, 1500 );
		
		$('#inner-line5-textbox-ff').fadeOut(800);
		$('#inner-line5-leftbox-ff').fadeOut(800);
		$('#inner-line5-rightbox1-ff').fadeOut(700);
		$('#inner-line5-rightbox2-ff').fadeOut(600);
		$('#inner-line5-rightbox3-ff').fadeOut(500);
		$('#inner-line5-bottom-ff').fadeOut(400);
		$('#inner-line5-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	
	
	
	
	
	$('#inner-line6-titlebox-ff').click(function () {
		
		$(this).css('font-style', 'italic');
		$('#inner-line6-signalbox-text-ff').show(0);
		$('#inner-line6-ff').animate(
		{
			'height': '750px'
		}, 1500 );
	
		$('#inner-line6-textbox-ff').fadeIn(800);
		$('#inner-line6-leftbox-ff').fadeIn(500);
		$('#inner-line6-rightbox1-ff').delay(700).slideDown(800);
		$('#inner-line6-rightbox2-ff').delay(1400).slideDown(800);
		$('#inner-line6-rightbox3-ff').delay(2100).slideDown(800);
		$('#inner-line6-bottom-ff').delay(2100).slideDown(800);
		$('#inner-line6-signalbox-text-ff').animate(
		{
			'width': '60px'
		}, 1000 );
		
	}); 
	
	$('#inner-line6-bottom-box1-l1-ff').click(function () {
		
		$('#inner-line6-titlebox-ff').css('font-style', 'normal');
		$('#inner-line6-signalbox-text-ff').hide(0);
		$('#inner-line6-ff').animate(
		{
			'height': '105px'
		}, 1000 );
		
		$('#inner-line6-textbox-ff').fadeOut(800);
		$('#inner-line6-leftbox-ff').fadeOut(800);
		$('#inner-line6-rightbox1-ff').fadeOut(700);
		$('#inner-line6-rightbox2-ff').fadeOut(600);
		$('#inner-line6-rightbox3-ff').fadeOut(500);
		$('#inner-line6-bottom-ff').fadeOut(400);
		$('#inner-line6-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	$('#inner-line6-signalbox-text-ff').click(function () {
		
		$('#inner-line6-titlebox-ff').css('font-style', 'normal');
		
		$('#inner-line6-ff').animate(
		{
			'height': '105px'
		}, 1500 );
		
		$('#inner-line6-textbox-ff').fadeOut(800);
		$('#inner-line6-leftbox-ff').fadeOut(800);
		$('#inner-line6-rightbox1-ff').fadeOut(700);
		$('#inner-line6-rightbox2-ff').fadeOut(600);
		$('#inner-line6-rightbox3-ff').fadeOut(500);
		$('#inner-line6-bottom-ff').fadeOut(400);
		$('#inner-line6-signalbox-text-ff').animate(
			{
				'width': '0px'
			}, 500 );
		
	}); 
	
	
	
	
	/***
	$('#inner-line1-titlebox-ff').toggle(function() {
		$(this).css('font-style', 'normal');
		
		$('#inner-line1-ff').animate(
		{
			'height': '105px'
		}, 1000 );
		$('#inner-line1-signalbox-text-ff').hide(0);
		$('#inner-line1-textbox-ff').hide();
		$('#inner-line1-leftbox-ff').hide();
		$('#inner-line1-rightbox1-ff').hide();
		$('#inner-line1-rightbox2-ff').hide();
		$('#inner-line1-rightbox3-ff').hide();
	});
	
		
		
	/***	
		
		$('#menuwej2-section2').css('color', '#fff');
		$('#menuwej2-section2').css('border-bottom', '0px');
		$('#menuwej3-section2').css('color', '#fff');
		$('#menuwej3-section2').css('border-bottom', '0px');
		$('#menuwej4-section2').css('color', '#fff');
		$('#menuwej4-section2').css('border-bottom', '0px');
		$('#menuwej5-section2').css('color', '#fff');
		$('#menuwej5-section2').css('border-bottom', '0px');
		$('#menuwej6-section2').css('color', '#fff');
		$('#menuwej6-section2').css('border-bottom', '0px');
		$('#sup23-section2').delay().hide(0)
		$('#sup23-section2').css('margin-left', '40px');
		$('#sup23-section2').css('opacity', 0);
		$('#sup24-section2').delay().hide(0)
		$('#sup24-section2').css('margin-left', '60px');
		$('#sup24-section2').css('opacity', 0);
		$('#sup25-section2').delay().hide(0)
		$('#sup25-section2').css('margin-left', '40px');
		$('#sup25-section2').css('opacity', 0);
		$('#rot1').hide();
		$('#rot1').css('margin-left', '15px');
		$('#rot1').css('opacity', 0);
		$('#img-s21-section2').css('margin-left', '0px');
		$('#img-s21-section2').css('opacity', 0);
		$('#img-s21-section2').hide(0).show(0);
		$('#img-s21-section2').attr('src', infoSlideOnPa3[0]).hide(0).show(0);
		$('#img-s21-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-30px'
			
		}, 500 );
		$('#sup25-section2').delay(500).show(0);
		$('#sup25-section2').text(infoSlideOnPa4[0]);
		$('#sup25-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#sup24-section2').delay(100).show(0);
		$('#sup24-section2').text(infoSlideOnPa2[0]);
		$('#sup24-section2').css('text-transform', 'capitalize');
		$('#sup24-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-20px'
		}, 500 );
		$('#sup23-section2').delay(200).show(0);
		$('#sup23-section2').text(infoSlideOnPa1[0]);
		$('#sup23-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#rot1').delay(1300).show();
		$('#rot1').text(infoSlideOnPa2[0]);
		$('#rot1').animate(
		{ 
			opacity: 1,
			'margin-left': '40px'
		}, 500 );
	});
	
	
	***/
	
	
	
	
	
	
	
	
	
	$('#titl').hide(0);
	$('#sup22').delay(0).hide(0, function() {
		$('#sup22').css('margin-left', '90px');
		$('#sup22').css('opacity', 0);
	});
	$('#sup23').delay().hide(0, function() {
		$(this).css('margin-left', '90px');
		$(this).css('opacity', 0);
		$('#img-s21').css('margin-left', '0px');
		$('#img-s21').css('opacity', 0);
		$('#img-s21').hide(0).show(0);
		$('#img-s21').animate(
		{ 
			opacity: 1,
			'margin-left': '-30px'
			
		}, 500 );
	});
	$('#titl').show(500);
	$('#sup22').delay(500).show(0);
	$('#sup22').animate(
		{ 
			opacity: 1,
			'margin-left': '60px'
		}, 500 );
	$('#sup23').delay(500).show(0);
	$('#sup23').animate(
		{ 
			opacity: 1,
			'margin-left': '60px'
		}, 500 );
	
	
	$('#sup22').delay(6000).hide(0, function() {
		$(this).text("Zakup, budowa lub modernizacja nieruchomości");
		$('#sup22').css('margin-left', '90px');
		$('#sup22').css('opacity', 0);
	});
	$('#sup23').delay(6000).hide(0, function() {
		$(this).css('margin-left', '90px');
		$(this).css('opacity', 0);
		$('#img-s21').css('margin-left', '0px');
		$('#img-s21').css('opacity', 0);
		$('#img-s21').attr('src', '/static/img/fonik.jpg').hide(0).show(0);
		$('#img-s21').animate(
		{ 
			opacity: 1,
			'margin-left': '-30px'
			
		}, 500 );
	});
	$('#sup22').delay(0).show(0);
	$('#sup22').animate(
		{ 
			opacity: 1,
			'margin-left': '60px'
		}, 500 );
	$('#sup23').delay(0).show(0);
	$('#sup23').animate(
		{ 
			opacity: 1,
			'margin-left': '60px'
		}, 500 );
	
	
	$('#sup22').delay(6000).hide(0, function() {
		$(this).text("Zakup, remont lub modernizacja środków trwałych");
		$('#sup22').css('margin-left', '90px');
		$('#sup22').css('opacity', 0);
	});
	$('#sup23').delay(6000).hide(0, function() {
		$(this).css('margin-left', '90px');
		$(this).css('opacity', 0);
		$('#img-s21').css('margin-left', '0px');
		$('#img-s21').css('opacity', 0);
		$('#img-s21').attr('src', '/static/img/kable.jpg').hide(0).show(0);
		$('#img-s21').animate(
		{ 
			opacity: 1,
			'margin-left': '-30px'
		}, 500 );
	});
	$('#sup22').delay(0).show(0);
	$('#sup22').animate(
		{ 
			opacity: 1,
			'margin-left': '60px'
		}, 500 );
	$('#sup23').delay(0).show(0);
	$('#sup23').animate(
		{ 
			opacity: 1,
			'margin-left': '60px'
		}, 500 );
	
	
	
	$('#sup22').delay(6000).hide(0, function() {
		$(this).text("Zakup gruntu pod inwestycje");
		$('#sup22').css('margin-left', '90px');
		$('#sup22').css('opacity', 0);
	});
	$('#sup23').delay(6000).hide(0, function() {
		$(this).css('margin-left', '90px');
		$(this).css('opacity', 0);
		$('#img-s21').css('margin-left', '0px');
		$('#img-s21').css('opacity', 0);
		$('#img-s21').attr('src', '/static/img/gielda.jpg').hide(0).show(0);
		$('#img-s21').animate(
		{ 
			opacity: 1,
			'margin-left': '-30px'
		}, 500 );
	});
	$('#sup22').delay(0).show(0);
	$('#sup22').animate(
		{ 
			opacity: 1,
			'margin-left': '60px'
		}, 500 );
	$('#sup23').delay(0).show(0);
	$('#sup23').animate(
		{ 
			opacity: 1,
			'margin-left': '60px'
		}, 500 );
});