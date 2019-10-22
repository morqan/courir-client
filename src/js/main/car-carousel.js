$('.owl-carousel').owlCarousel({
    loop: false,
    rewind: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })


//  $( document ).ready(function() {
//   $('.car__link').click(function(){
//     $('.car__link').removeClass("active");
//     $(this).addClass("active");
// });
// });