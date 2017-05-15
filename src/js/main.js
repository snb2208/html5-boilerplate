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

$(".menu").click(function(){
	$(".menu").hide();
	$(".hamburger").toggleClass("change");

});







$(document).ready(function() {
	console.log('ready');
	
});	


$(window).resize(function() {
	console.log('resize');
});

var menuHeight = $('.head').height();

$(window).scroll(function() {
	var scrollAmount = $(window).scrollTop();
    

}); 


/*if(options.normalScrollElements){
	                 $document.on('mouseenter touchstart', options.normalScrollElements, function () {
	                     setAllowScrolling(false);
	                 $document.on('mouseenter', options.normalScrollElements, function () {
	                     setMouseWheelScrolling(false);
	                  });
	  
	                 $document.on('mouseleave touchend', options.normalScrollElements, function(){
	                    setAllowScrolling(true);
	                $document.on('mouseleave', options.normalScrollElements, function(){
	                    setMouseWheelScrolling(true);
	                  });
	              }
          }

*/
