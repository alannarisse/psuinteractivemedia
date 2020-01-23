  $(document).ready(function() {
//        alert( "ready!" );
//     $('p.lipsum').fadeIn(1000); // slow, fast, miliseconds
//    $('p.lipsum').fadeOut(1000);
      // $('p.lipsum').fadeIn(2000).fadeOut(1000);
      // $('p.slide1').slideUp(8000);
      // $('h1').html('Replaced your header, sucka');
      // $('h1').css('color', 'blue');
    });


$(function() {
    $( ".readme" ).click(function () {
      if ( $( ".slide2" ).is( ":hidden" ) ) {
        $( ".slide2" ).slideDown( 2000 );
      } else {
        $( ".slide2" ).slideUp( 1000 );
      }
    });

    
    $(".rightbtn").click(function(){
        $(".moveme").animate({left: '250px'});
    });
    $(".leftbtn").click(function(){
        $(".moveme").animate({left: '0px'});
    });
    
    
});