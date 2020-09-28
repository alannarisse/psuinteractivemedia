// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  
$(".about").hover(function(){
    $(".knob_container").css('transform', 'rotate(180deg)');

});

$(".parts").hover(function(){
    $(".knob_container").css('transform', 'rotate(-90deg)');
});

$(".listen").hover(function(){
    $(".knob_container").css('transform', 'rotate(90deg)');
});


$(".listen, .parts, .about").mouseover(function() {
    $('audio#key')[0].play();

});


$(".on").click(function(){
    $(".light").toggleClass("clicked");
    $(".record").toggleClass("recordplay");
    
 });



$('#shinssong').click(function(){
        if ($('audio#player')[0].paused == false ){
          $('audio#player')[0].pause()
          $('audio#player')[0].currentTime = 0
        } else {
          $('source').attr('src', 'images/shinssong.mp3')
          $('audio#player')[0].load()         
          $('audio#player')[0].play()
        }
      })

$('#grouplove').click(function(){
        if ($('audio#player')[0].paused == false ){
          $('audio#player')[0].pause()
          $('audio#player')[0].currentTime = 0
        } else {
          $('source').attr('src', 'images/grouplovesong.mp3')
          $('audio#player')[0].load()         
          $('audio#player')[0].play()
        }
      })

$('#icecream').click(function(){
        if ($('audio#player')[0].paused == false ){
          $('audio#player')[0].pause()
          $('audio#player')[0].currentTime = 0
        } else {
          $('source').attr('src', 'images/icecreamsong.mp3')
          $('audio#player')[0].load()         
          $('audio#player')[0].play()
        }
      })

$('#khaidreams').click(function(){
        if ($('audio#player')[0].paused == false ){
          $('audio#player')[0].pause()
          $('audio#player')[0].currentTime = 0
        } else {
          $('source').attr('src', 'images/dreamssong.mp3')
          $('audio#player')[0].load()         
          $('audio#player')[0].play()
        }
      })





$(document).ready(function(){
  $(".grid1").hide();
  $(".on").click(function(){
    $(".grid1").toggle(1000);
  });
});

$(document).ready(function(){
  $(".grid2").hide();
  $(".record").click(function(){
    $(".grid2").toggle(1000);
  });
});

$(document).ready(function(){
  $(".grid3").hide();
  $(".label").click(function(){
    $(".grid3").toggle(1000);
  });
});

$(document).ready(function(){
  $(".grid4").hide();
  $(".cartridge").click(function(){
    $(".grid4").toggle(1000);
  });
});

$(document).ready(function(){
  $(".grid5").hide();
  $(".arm").click(function(){
    $(".grid5").toggle(1000);
  });
});

$(document).ready(function(){
  $(".grid6").hide();
  $(".center").click(function(){
    $(".grid6").toggle(1000);
  });
});



















// End of Your Code . Don't delete that line below!!
});