$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	

// loop through each .project element
$('.project').each(function(){
	// build a scene
	console.log(this);
	var ourScene = new ScrollMagic.Scene({
		triggerElement: this.children[0],
		triggerHook: 0.9,
		// reverse: false
	})
	.setClassToggle(this, 'fade-in') // add class to project01
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		indent: 200,
		colorStart: '#75C695'
	}) // this requires a plugin
	.addTo(controller);
})
});


















