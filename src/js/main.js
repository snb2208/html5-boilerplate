console.log('Hello world!');


$(document).ready(function() {
	console.log('ready');
	var headerHeight = $('header').height();
	console.log(headerHeight);
});

$(document).resize(function() {
	console.log('resize');
});

$(document).scroll(function() {
	console.log('scroll');
});