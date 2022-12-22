var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (!panel.classList.contains("show-footer")) {
      panel.classList.add("show-footer");
    } else {
      panel.classList.remove("show-footer");
    }
  });
}


const myCarouselElement = document.querySelector('#carouselSlider')


const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  // wrap: false
  pause: "hover"
})






// $(window).load(function(){
 
//   });


//   $(function () {
//     $('.carousel').carousel({
//         interval:1000
//         pause: "false"
//     });
//     $('#playButton').click(function () {
//         $('#carouselSlider').carousel('cycle');
//     });
//     $('#pauseButton').click(function () {
//         $('#carouselSlider').carousel('pause');
//     });
// })