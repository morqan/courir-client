$('.hide-info').click(function () {
  $('.info').css({
    'display': 'none'
  });
});
$('.show-info').click(function () {
  $('.info').css({
    'display': 'block'
  });

});

$('.hide-receiver').click(function () {
  $('#receiver, #receiver-number').css({
    'display': 'none'
  });
});
$('.show-receiver').click(function () {
  $('#receiver, #receiver-number').css({
    'display': 'block'
  });
});

$('#pills-car-3-tab').click(function () {
  $("#truck").prop( "checked", true );

});

$('#pills-car-2-tab').click(function () {
  $("#evacuator").attr('checked', 'checked');

});

