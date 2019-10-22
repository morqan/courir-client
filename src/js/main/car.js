$('#truck').click(function () {
  $('#labor, #packing').css({
    'display': 'block'
  });
});

$('.car__link-hide').click(function () {
  $('#labor, #packing').css({
    'display': 'none'
  });
});

// $('.car__link').click(function(){
//   $('.car__link').removeClass("car__link--active");
//   $(this).addClass("car__link--active");
// });