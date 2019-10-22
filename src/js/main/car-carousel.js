
 $( document ).ready(function() {
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
          items: 4
        },
        600: {
          items: 4
        },
        1000: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    })
});