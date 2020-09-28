
var marunight = document.querySelector(".marunight");
var linetext = document.querySelector(".linetext");
var okinawa = document.querySelector(".okinawa"); 
    
function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
    
window.addEventListener("DOMContentLoaded", scrollLoop, false);
 
var xScrollPosition;
var yScrollPosition;
 
function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;
    setTranslate(0, yScrollPosition * 1, marunight);
    setTranslate(0, yScrollPosition * -3, linetext);
    setTranslate(0, yScrollPosition * -1, okinawa);
    requestAnimationFrame(scrollLoop);
}