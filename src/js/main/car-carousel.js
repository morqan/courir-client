$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    // navText: [
    //   "<i class='fa fa-caret-left'></i>",
    //   "<i class='fa fa-caret-right'></i>"
    // ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
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