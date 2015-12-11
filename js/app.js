$(document).ready(function() {
	
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	
	.mousedown(function() {
		console.log('mousedown');
		// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// show hadouken and animate it to the right of screen
	})
	.mouseup(function() {
		console.log('mouseup');
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
//		$('.hadouken').hide();
		// ryu goes back to his normal position
	});
	
	
});