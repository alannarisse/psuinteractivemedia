$(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        slideShowSpeed: 2000,
    });

    $(".burger-nav").on("click", function () {
        $("nav ul").toggleClass("open")
    });

});