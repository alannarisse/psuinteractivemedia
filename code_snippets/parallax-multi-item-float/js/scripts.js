$(function() {
	
	
	// Scroll to elements smoothly
	$('html').smoothScroll(1000);
	
	
	
	// Enable parallax on divs
	$(window).enllax({
		type: 'foreground'
	});
	
	
	
	// Reveal .slowshow when user gets close to page 2
	$('.slowshow').hide();
	
	$('#page2').waypoint(function() {
		$('.slowshow').fadeIn(1000);
	}, {
		offset: 200
	});
	
	
	
	// Update nav links when user scrolls/clicks to different pages
	$('.page1_link').addClass('selected');
	
	$('#page2').waypoint(function(direction) {
		$('nav a').removeClass('selected');
		if(direction == 'down') $('.page2_link').addClass('selected');
		else $('.page1_link').addClass('selected');
	});
	
	$('#page3').waypoint(function(direction) {
		$('nav a').removeClass('selected');
		if(direction == 'down') $('.page3_link').addClass('selected');
		else $('.page2_link').addClass('selected');
	});
	
	$('#page4').waypoint(function(direction) {
		$('nav a').removeClass('selected');
		if(direction == 'down') $('.page4_link').addClass('selected');
		else $('.page3_link').addClass('selected');
	});
	
	
});