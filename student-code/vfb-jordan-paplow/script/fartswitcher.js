/*//Turns background audio on and off
$("#audio-control").click(function () {
  if ($("#background")[0].volume != 0) {
    $("#background")[0].volume = 0
  } else {
    $("#background")[0].volume = 1
  }
})*/

var audioPlaying = false,
	audio

	(function() {
	audio = document.getElementById('audio');

	var audioControl = document.getElementById('audio-control');
	audioControl.addEventListener('click', audioControlHandler, false)
}())

function audioControlHandler(e) {
	var _self = e.target;

	if (!audioPlaying) {
		_self.classList.add('noVolume')
		audio.volume = 0
	} else {
		_self.classList.remove('noVolume')
		audio.volume = 1
	}
	audioPlaying = !audioPlaying
}

// global variables for souce and player
let sourceUrl = "audio/fart-classic.mp3"
let player = $("#player")

// buttons for switching each sound
$(".btn-classic").click(function () {
  sourceUrl = "audio/fart-classic.mp3"
  changeSource(sourceUrl)
})

$(".btn-cutie").click(function () {
  sourceUrl = "audio/fart-cutie.mp3"
  changeSource(sourceUrl)
})

$(".btn-squeeker").click(function () {
  sourceUrl = "audio/fart-squeeker.mp3"
  changeSource(sourceUrl)
})

$(".btn-danger").click(function () {
  sourceUrl = "audio/fart-danger.mp3"
  changeSource(sourceUrl)
})

// plays sound when mouse hovers over butt image
$(".booty").mouseenter(function () {
  player[0].oncanplaythrough = player[0].play()
})

$(".booty").click(function () {
  player[0].oncanplaythrough = player[0].play()
})

// the little function that changes the source and loads it.
function changeSource(sourceUrl) {
  $("#fart-sound").attr("src", sourceUrl)
  /****************/
  player[0].pause()
  player[0].load() // this is important since we're changing the source on the fly, we need to also load it
}
