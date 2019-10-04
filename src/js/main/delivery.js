

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