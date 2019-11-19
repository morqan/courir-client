$(document).ready(function () {
  

  $('#first_form').parsley().on('field:validated', function () {
      var ok = $('.parsley-error').length === 0;


      // if ($('input[type=radio][name=car2]:checked').length === 0) {
      //   $("#first_form").animate({
      //     scrollTop: $('.swiper1').prop("scrollHeight")
      //   }, 800);
      // };

      


    })
    .on('form:submit', function () {
      return false; // Don't submit form for this demo
    });
});