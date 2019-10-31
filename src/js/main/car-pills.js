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