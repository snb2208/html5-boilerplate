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


$('x').click(function(){
	x.hide();
});


$(document).ready(function() {
	console.log('ready');
	var headerHeight = null;
	var docHeight = null;
	
});

$(window).resize(function() {
	console.log('resize');
});

$(window).scroll(function() {
	console.log('scroll');
});