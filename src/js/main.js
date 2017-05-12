console.log('Hello world!');







$( ".hamburger" ).click(function() {
  $( this ).toggleClass( "change" );
  var isOpen = $(this).hasClass('change');
  console.log(isOpen)
  if (isOpen) {
  	$('nav.menu').show();
  } else {
  	$('nav.menu').hide();
  }
});



$(".anime-image-wrapper img").hover(hoverIn, hoverOut);

function hoverIn(){
	var hoveredId = $(this).attr('id');
	var messageClass = '.message-' + hoveredId;
	$(messageClass).show();
}

function hoverOut(){
	var hoveredId = $(this).attr('id');
	var messageClass = '.message-' + hoveredId;
	$(messageClass).hide();
}






$(document).ready(function() {
	console.log('ready');
	/*var headerHeight = $('head').outerHeight();

	$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.top-menu').addClass('fixed');
    } else {
        $('.top.menu').removeClass('fixed');
    }
});*/

	$(window).bind('scroll', function () {
    var menu = $('.head');
    if ($(window).scrollTop() > menu.offset().top) {
        menu.addClass('fixed');
    } else {
        menu.removeClass('fixed');
    }
});


});

$(window).resize(function() {
	console.log('resize');
});

$(window).scroll(function() {
	console.log('scroll');
});





