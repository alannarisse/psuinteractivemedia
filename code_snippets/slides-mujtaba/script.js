// your script file for adding your own jquery
$(function () {
  // Your Code from here on down. Don't delete that line above!

  $(".single-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: false,
    pauseOnDotsHover: true,
    arrows: false,
    dots: true
  })

  $(".pause").on("click", function () {
    $(".slider").slick("slickPause")
  })

  $(".play").on("click", function () {
    $(".slider").slick("slickPlay")
  })

  // End of Your Code . Don't delete that line below!!
})
