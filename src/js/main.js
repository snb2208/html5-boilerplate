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
	var headerHeight = null;
	var docHeight = null;
	
});

$(window).resize(function() {
	console.log('resize');
});

$(window).scroll(function() {
	console.log('scroll');
});