

  $('.non-urgent-link').click(function(){
    $('#delivery').css({
      'display' : 'none'
    });
  });

  $('.urgent-link').click(function(){
    $('#delivery').css({
      'display' : 'block'
    });
  });

  $('.datepicker__link').click(function(){
    $('.datepicker__input ').css({
      'color' : '#ffffff'
    });
  });