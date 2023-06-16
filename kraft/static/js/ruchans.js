
var infoSlideOnPa1 = [
	"Każda inwestycja jest inna. Rozumiemy oczekiwania firm, uwzględniamy różnorodne uwarunkowania biznesowe, jesteśmy w stanie zaproponować właściwe produkty i zaawansowane struktury umożliwiające finansowanie różnorodnych typów inwestycji. Dobierzemy dla Ciebie odpowiedni produkt. Mamy unikalne rozwiązania dla trudnych przedsięwzięć. Łączymy produkty aby uzyskać najlepszy efekt.",
	
	"Każda inwestycja jest inna. Rozumiemy oczekiwania firm, uwzględniamy różnorodne uwarunkowania biznesowe, jesteśmy w stanie zaproponować właściwe produkty i zaawansowane struktury umożliwiające finansowanie różnorodnych typów inwestycji. Dobierzemy dla Ciebie odpowiedni produkt. Mamy unikalne rozwiązania dla trudnych przedsięwzięć. Łączymy produkty aby uzyskać najlepszy efekt.",
	 
	"Leasing to najwygodniejsza forma finansowania środków trwałych oraz elementów produkcyjnych przedsiębiorstwa. Szeroka gama produktów oraz współpraca z wieloma leasingodawcami pozwoli nam dobrać dla Ciebie idealne rozwiązanie. Prawie każdą rzecz można wylizingować.",
	
	"Dla dojrzałych firm z ustabilizowanym produktem i szerokim rynkiem, dla dalszej ekspansji lub dla zdyskontowania zysków, mamy ciekawe rozwiązania w oparciu o fundusze inwestycyjne oraz giełdy.",
	
	"Skorzystaj z dotacji. Zwiększ swoją konkurencyjność. Pozyskaj pieniądze na start. Sfinansuj swoją inwestycję. Dla wielu przedsiębiorców startujących z nowymi projektami dotacje są trampoliną do do wielkiego biznesu.",
	
	"Dla firm, które znalazły się w trudnej sytuacji, pomagamy wyjść z opresji, podnieść przedsiębiorstwo i na nowo zaistnieć na rynku."
	];
	

var infoSlideOnPa2 = [
	"finansowanie inwestycji",
	"finansowanie obrotowe",
	"leasing",
	"fundusze i giełdy",
	"dotacje",
	"restrukturyzacje"
	];
	

var infoSlideOnPa3 = [
	"/static/img/fonik.jpg",
	"/static/img/kable.jpg",
	"/static/img/pexels11.jpg",
	"/static/img/gielda.jpg",
	"/static/img/auto.jpg",
	"/static/img/gielda.jpg"
	];	
	


var infoSlideOnPa4 = [
	"Potęga inwestowania.",
	"Rozwiń się!",
	"Weź leasing!",
	"Moc rynku.",
	"Zrób przewagę!",
	"Zzzong? Pomagamy."
	];






$(document).ready(function() {
	
	
	$('.intros').delay(100).hide();
	
	$('#menu-expoz').hide().css('margin-left', '100%');
	$('#menu-icon-out').hide();
	$('#menu-icon').hide();
	$('#home-grid-startup').hide();
	$('#home-grid-growup').hide();
	$('#home-grid-hungup').hide();

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
	
	
	
	
	
	
	
	
	$('#sup1').hide().css('margin-top', '50px');
	$('#sup34').hide();
	$('#sup35').hide();
	$('#sup36').hide();
	$('#sup3').hide();
	$('#front-home').hide();
	$('#front-home').fadeIn(2000);
	$('#sup1').delay(100).slideDown(3000, function() {
		$(this).animate(
		{
			'margin-top': '-10px'
		}, 1500);
		
	});
	$('#sup3').show(500);
	$('#sup34').css('margin-left', '330px');
	$('#sup34').css('opacity', 0);
	$('#sup34').delay(3000).show(0);
	$('#sup34').animate(
	{
		'margin-left': '190px',
		opacity: 1
		
	}, 1000);
	$('#sup35').css('margin-left', '330px');
	$('#sup35').css('opacity', 0);
	$('#sup35').delay(3300).show(0);
	$('#sup35').animate(
	{
		'margin-left': '190px',
		opacity: 1
		
	}, 1000);
	$('#sup36').css('margin-left', '330px');
	$('#sup36').css('opacity', 0);
	$('#sup36').delay(3600).show(0);
	$('#sup36').animate(
	{
		'margin-left': '190px',
		opacity: 1
		
	}, 1000);
	
	
	
	
	
	
	
	
	
	
	
	
	$('#li11-section2').mouseover(function () {
		
		$(this).css('color', '#ebadbb');
		$(this).css('background', '');
		$('#li12-section2').css('color', '#fff');
		$('#li12-section2').css('background', '');
		$('#li13-section2').css('color', '#fff');
		$('#li13-section2').css('background', '');
		$('#li14-section2').css('color', '#fff');
		$('#li14-section2').css('background', '');
		$('#li15-section2').css('color', '#fff');
		$('#li15-section2').css('background', '');
		$('#li16-section2').css('color', '#fff');
		$('#li16-section2').css('background', '');
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
	
	
	$('#li12-section2').mouseover(function () {
		
		$(this).css('color', '#ebadbb');
		$(this).css('background', '');
		$('#li11-section2').css('color', '#fff');
		$('#li11-section2').css('background', '');
		$('#li13-section2').css('color', '#fff');
		$('#li13-section2').css('background', '');
		$('#li14-section2').css('color', '#fff');
		$('#li14-section2').css('background', '');
		$('#li15-section2').css('color', '#fff');
		$('#li15-section2').css('background', '');
		$('#li16-section2').css('color', '#fff');
		$('#li16-section2').css('background', '');
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
		$('#img-s21-section2').attr('src', infoSlideOnPa3[1]).hide(0).show(0);
		$('#img-s21-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-30px'
			
		}, 500 );
		$('#sup25-section2').delay(500).show(0);
		$('#sup25-section2').text(infoSlideOnPa4[1]);
		$('#sup25-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#sup24-section2').delay(100).show(0);
		$('#sup24-section2').text(infoSlideOnPa2[1]);
		$('#sup24-section2').css('text-transform', 'capitalize');
		$('#sup24-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-20px'
		}, 500 );
		$('#sup23-section2').delay(200).show(0);
		$('#sup23-section2').text(infoSlideOnPa1[1]);
		$('#sup23-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#rot1').delay(1300).show();
		$('#rot1').text(infoSlideOnPa2[1]);
		$('#rot1').animate(
		{ 
			opacity: 1,
			'margin-left': '40px'
		}, 500 );
	});
	
	
	$('#li13-section2').mouseover(function () {
		
		$(this).css('color', '#ebadbb');
		$(this).css('background', '');
		$('#li11-section2').css('color', '#fff');
		$('#li11-section2').css('background', '');
		$('#li12-section2').css('color', '#fff');
		$('#li12-section2').css('background', '');
		$('#li14-section2').css('color', '#fff');
		$('#li14-section2').css('background', '');
		$('#li15-section2').css('color', '#fff');
		$('#li15-section2').css('background', '');
		$('#li16-section2').css('color', '#fff');
		$('#li16-section2').css('background', '');
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
		$('#img-s21-section2').attr('src', infoSlideOnPa3[2]).hide(0).show(0);
		$('#img-s21-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-30px'
			
		}, 500 );
		$('#sup25-section2').delay(500).show(0);
		$('#sup25-section2').text(infoSlideOnPa4[2]);
		$('#sup25-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#sup24-section2').delay(100).show(0);
		$('#sup24-section2').text(infoSlideOnPa2[2]);
		$('#sup24-section2').css('text-transform', 'capitalize');
		$('#sup24-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-20px'
		}, 500 );
		$('#sup23-section2').delay(200).show(0);
		$('#sup23-section2').text(infoSlideOnPa1[2]);
		$('#sup23-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#rot1').delay(1300).show();
		$('#rot1').text(infoSlideOnPa2[2]);
		$('#rot1').animate(
		{ 
			opacity: 1,
			'margin-left': '40px'
		}, 500 );
	});
	
	
	$('#li14-section2').mouseover(function () {
		
		$(this).css('color', '#ebadbb');
		$(this).css('background', '');
		$('#li11-section2').css('color', '#fff');
		$('#li11-section2').css('background', '');
		$('#li13-section2').css('color', '#fff');
		$('#li13-section2').css('background', '');
		$('#li12-section2').css('color', '#fff');
		$('#li12-section2').css('background', '');
		$('#li15-section2').css('color', '#fff');
		$('#li15-section2').css('background', '');
		$('#li16-section2').css('color', '#fff');
		$('#li16-section2').css('background', '');
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
		$('#img-s21-section2').attr('src', infoSlideOnPa3[3]).hide(0).show(0);
		$('#img-s21-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-30px'
			
		}, 500 );
		$('#sup25-section2').delay(500).show(0);
		$('#sup25-section2').text(infoSlideOnPa4[3]);
		$('#sup25-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#sup24-section2').delay(100).show(0);
		$('#sup24-section2').text(infoSlideOnPa2[3]);
		$('#sup24-section2').css('text-transform', 'capitalize');
		$('#sup24-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-20px'
		}, 500 );
		$('#sup23-section2').delay(200).show(0);
		$('#sup23-section2').text(infoSlideOnPa1[3]);
		$('#sup23-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#rot1').delay(1300).show();
		$('#rot1').text(infoSlideOnPa2[3]);
		$('#rot1').animate(
		{ 
			opacity: 1,
			'margin-left': '40px'
		}, 500 );
	});
	
	
	$('#li15-section2').mouseover(function () {
		
		$(this).css('color', '#ebadbb');
		$(this).css('background', '');
		$('#li11-section2').css('color', '#fff');
		$('#li11-section2').css('background', '');
		$('#li13-section2').css('color', '#fff');
		$('#li13-section2').css('background', '');
		$('#li14-section2').css('color', '#fff');
		$('#li14-section2').css('background', '');
		$('#li12-section2').css('color', '#fff');
		$('#li12-section2').css('background', '');
		$('#li16-section2').css('color', '#fff');
		$('#li16-section2').css('background', '');
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
		$('#img-s21-section2').attr('src', infoSlideOnPa3[4]).hide(0).show(0);
		$('#img-s21-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-30px'
			
		}, 500 );
		$('#sup25-section2').delay(500).show(0);
		$('#sup25-section2').text(infoSlideOnPa4[4]);
		$('#sup25-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#sup24-section2').delay(100).show(0);
		$('#sup24-section2').text(infoSlideOnPa2[4]);
		$('#sup24-section2').css('text-transform', 'capitalize');
		$('#sup24-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-20px'
		}, 500 );
		$('#sup23-section2').delay(200).show(0);
		$('#sup23-section2').text(infoSlideOnPa1[4]);
		$('#sup23-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#rot1').delay(1300).show();
		$('#rot1').text(infoSlideOnPa2[4]);
		$('#rot1').animate(
		{ 
			opacity: 1,
			'margin-left': '40px'
		}, 500 );
	});
	
	
	$('#li16-section2').mouseover(function () {
		
		$(this).css('color', '#ebadbb');
		$(this).css('background', '');
		$('#li11-section2').css('color', '#fff');
		$('#li11-section2').css('background', '');
		$('#li13-section2').css('color', '#fff');
		$('#li13-section2').css('background', '');
		$('#li14-section2').css('color', '#fff');
		$('#li14-section2').css('background', '');
		$('#li15-section2').css('color', '#fff');
		$('#li15-section2').css('background', '');
		$('#li12-section2').css('color', '#fff');
		$('#li12-section2').css('background', '');
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
		$('#img-s21-section2').attr('src', infoSlideOnPa3[5]).hide(0).show(0);
		$('#img-s21-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-30px'
			
		}, 500 );
		$('#sup25-section2').delay(500).show(0);
		$('#sup25-section2').text(infoSlideOnPa4[5]);
		$('#sup25-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#sup24-section2').delay(100).show(0);
		$('#sup24-section2').text(infoSlideOnPa2[5]);
		$('#sup24-section2').css('text-transform', 'capitalize');
		$('#sup24-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '-20px'
		}, 500 );
		$('#sup23-section2').delay(300).show(0);
		$('#sup23-section2').text(infoSlideOnPa1[5]);
		$('#sup23-section2').animate(
		{ 
			opacity: 1,
			'margin-left': '0px'
		}, 500 );
		$('#rot1').delay(1300).show();
		$('#rot1').text(infoSlideOnPa2[5]);
		$('#rot1').animate(
		{ 
			opacity: 1,
			'margin-left': '40px'
		}, 500 );
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	var headImgs = [
	"/static/img/key1.jpg",
	"/static/img/bizz.jpg",
	"/static/img/cel.jpg"
	];
	var imgs =[];
	for (var i = 0; i<headImgs.length; i++) {
		imgs[i] = new Image();
		imgs[i].src = headImgs[i];
	}

	$('#sup34').click(function() {
		
		$('#home-grid').fadeOut(800);
		
		$('#front-home').fadeOut(1000, function() {
			$(this).css('background-image', 'url("/static/img/key1.jpg")');
			$(this).fadeIn(2000);
			$('#home-grid-startup').fadeIn(2000);
		});
	});
	   
	$('#sup35').click(function() {
		
		$('#home-grid').fadeOut(800);
		
		$('#front-home').fadeOut(1000, function() {
			$(this).css('background-image', 'url("/static/img/bizz.jpg")');
			$(this).fadeIn(2000);
			$('#home-grid-growup').fadeIn();
		});
	});
	
	$('#sup36').click(function() {
		
		$('#home-grid').fadeOut(800);
		
		$('#front-home').fadeOut(1000, function() {
			$(this).css('background-image', 'url("/static/img/cel.jpg")');
			$(this).fadeIn(3000);
			$('#home-grid-hungup').fadeIn();
		});
	});
	
	
	
	
	
	
	
	$('#home-grid-startup-bottom-switch1').click(function() {
		
		$('#home-grid-startup').fadeOut(800);
		
		$('#front-home').fadeOut(1000, function() {
			$(this).css('background-image', 'url("/static/img/bizz.jpg")');
			$(this).fadeIn(2000);
			$('#home-grid-growup').fadeIn(2000);
		});
	});
	
	
	$('#home-grid-startup-bottom-switch2').click(function() {
		
		$('#home-grid-startup').fadeOut(800);
		
		$('#front-home').fadeOut(1000, function() {
			$(this).css('background-image', 'url("/static/img/cel.jpg")');
			$(this).fadeIn(2000);
			$('#home-grid-hungup').fadeIn(2000);
		});
	});
	
	
	$('#home-grid-growup-bottom-switch3').click(function() {
		
		$('#home-grid-growup').fadeOut(800);
		
		$('#front-home').fadeOut(1000, function() {
			$(this).css('background-image', 'url("/static/img/key1.jpg")');
			$(this).fadeIn(2000);
			$('#home-grid-startup').fadeIn(2000);
		});
	});
	
	
	$('#home-grid-growup-bottom-switch4').click(function() {
		
		$('#home-grid-growup').fadeOut(800);
		
		$('#front-home').fadeOut(1000, function() {
			$(this).css('background-image', 'url("/static/img/cel.jpg")');
			$(this).fadeIn(2000);
			$('#home-grid-hungup').fadeIn(2000);
		});
	});
	
	
	$('#home-grid-hungup-bottom-switch5').click(function() {
		
		$('#home-grid-hungup').fadeOut(800);
		
		$('#front-home').fadeOut(1000, function() {
			$(this).css('background-image', 'url("/static/img/key1.jpg")');
			$(this).fadeIn(2000);
			$('#home-grid-startup').fadeIn(2000);
		});
	});
	
	
	$('#home-grid-hungup-bottom-switch6').click(function() {
		
		$('#home-grid-hungup').fadeOut(800);
		
		$('#front-home').fadeOut(1000, function() {
			$(this).css('background-image', 'url("/static/img/bizz.jpg")');
			$(this).fadeIn(2000);
			$('#home-grid-growup').fadeIn(2000);
		});
	});

});




