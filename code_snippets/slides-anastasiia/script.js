// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!




// code for single slider carousel
$('.single-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: true,
  infinite: true,
  dots: true,
  draggable: false
});


$('.my-slick').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows: true,
  slidesToShow: 3,
  centerMode: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
      	centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
      	centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
      	centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



  // End of Your Code . Don't delete that line below!!

});