$(document).ready(function() {
	intro();
	start();
});

	
function start() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
	})
	
	.on('mousedown keyup', function() {
		playHadouken();
		$('.ryu-cool').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
		{'left': '100%'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '540px');
		})
	})
	.on('mouseup keydown', function() {
		$('.ryu-ready').show();
		$('.ryu-still').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
	});
	
	$(document).on('keydown mousedown', function(a) {
		var k = a.which;
		if (k === 88 ) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
				console.log("works");
		}
	})
	.on('keyup mouseup', function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	});	
};

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.3;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function intro() {
	$('#intro-sound')[0].volume = 0.2;
	$('#intro-sound')[0].load();
	$('#intro-sound')[0].play();
	$('.street-fighter').fadeIn(4000, function() {
		$(this).fadeOut(2000, function() {
			$('.hedouken-instruction').fadeIn(2000, function() {
				$('.looking-cool-instruction').fadeIn(1000);
			});
		});
	});
};


