$(document).ready(function(){
	var controller = new ScrollMagic.Controller();

	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#project01'
	})
	.setClassToggle('#project01', 'fade-in');
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		indent: 200,
		colorStart: '#75c695'
	});
	.addTo(controller);

});


















