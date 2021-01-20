/*

AudioFade v1.0
Copyright (c) 2015 by Kameron Black
This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

*/

loopFlags = {};

function AudioFade(element, fadeIn, fadeOut, fadeDuration) {
	
	this.element = $(element).get(0);
	this.fadeIn = fadeIn;
	this.fadeOut = fadeOut;
    
    element_id = $(element).attr('id');
    loopFlags[element_id] = false
    
	if (fadeDuration === undefined) {
		this.fadeDuration = 500;
	} else {
		this.fadeDuration = fadeDuration;
	}
	
	if (this.element.hasAttribute("loop")) {
		this.element.play();
	} else {
		var noLoop = true;
	}
	this.element.volume = 0;
	
	this.init = function() {
        
	$(window).scroll(function() {
		
		this.element = $(element).get(0);
		this.fadeIn = fadeIn;
		this.fadeOut = fadeOut;
        
        element_id = $(element).attr('id');
    
		if (fadeDuration === undefined) {
			this.fadeDuration = 500;
		} else {
			this.fadeDuration = fadeDuration;
		}
        
		if (noLoop === true) {
			
			if ($(window).scrollTop() > this.fadeIn && loopFlags[element_id] === false) {
				this.element.play();
				this.element.volume = 1;
				loopFlags[element_id] = true;
			}
			
		} else {
			
			if ($(window).scrollTop() >= this.fadeIn && $(window).scrollTop() <= this.fadeIn + this.fadeDuration) { //fade in
				this.element.volume = ($(window).scrollTop() - this.fadeIn) / this.fadeDuration;
			} else if ($(window).scrollTop() >= this.fadeOut && $(window).scrollTop() <= this.fadeOut + this.fadeDuration) { //fade out
				this.element.volume = 1 - (($(window).scrollTop() - this.fadeOut) / this.fadeDuration);
			} else if ($(window).scrollTop() > this.fadeIn + this.fadeDuration && $(window).scrollTop() < this.fadeOut) {
				if (this.element.volume !== 1) {
				this.element.volume = 1;
				}
			} else {
				if (this.element.volume !== 0) {
				this.element.volume = 0;
				}
			}
            
            console.log(this.element.volume)
			
		}
	});
	};
}