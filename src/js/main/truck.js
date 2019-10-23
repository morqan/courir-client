$('#truck').change(function () {
  $('#labor, #packing').css({
    'display': 'block'
  });
});

$('.car-hide').change(function () {
  $('#labor, #packing').css({
    'display': 'none'
  });
});

// $('.car__link').click(function(){
//   $('.car__link').removeClass("car__link--active");
//   $(this).addClass("car__link--active");
// });

$('#truck').attr( "checked" )