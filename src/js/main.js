



$(document).ready(function() {
	console.log('ready');

	//Hamburger menu animate to close button
	$( ".hamburger" ).click(function() {
	  $( this ).toggleClass( "change" );
	  var isOpen = $(this).hasClass('change');
	  console.log(isOpen)
	  if (isOpen) {
	  	$('nav.menu').show();
	  	$('body').css({'overflow': 'hidden'});
	  } else {
	  	$('nav.menu').hide();
	  	$('body').css({'overflow': 'scroll'});
	  }
	});

	//To prevent scrolling when menu is open
	$('nav ul li').click(function(){
		$('body').css({'overflow': 'scroll'});
	});



//Message display on hover over images in Home page
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

	$(".menu").click(function(){
		$(".menu").hide();
		$(".hamburger").toggleClass("change");

	});
	
});	


$(window).resize(function() {
	console.log('resize');
});



$(window).scroll(function() {
	var scrollAmount = $(window).scrollTop();
    

}); 


