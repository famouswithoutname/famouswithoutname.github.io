/*
all_images = new Array (
"image/baner_intereco.jpg",
"image/banner_home(1).jpg");
var ImgNum = 0;
var ImgLength = all_images.length - 1;
var delay = 4000; 
var lock = false;
var run;

function chgImg(direction) {
 if (document.images) {
  ImgNum = ImgNum + direction;
  if (ImgNum > ImgLength) { ImgNum = 0; }
  if (ImgNum < 0) { ImgNum = ImgLength; }
  document.slide_show.src = all_images[ImgNum];
 }
}

function auto() {
 if (lock == true) {
  lock = false;
  window.clearInterval(run);
 }
 else if (lock == false) {
  lock = true;
  run = setInterval("chgImg(1)", delay);
 }
}
*/

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
    });
    
  });