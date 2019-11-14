$('input:radio[name="day"]').change(

  function () {



    if ($(this).is(':checked') && $(this).val() == 'today') {
      $('.delivery__time-1').css({
        'display': 'block'
      });
      $('.delivery__time-2').css({
        'display': 'none'
      });
      $('.delivery__time-3').css({
        'display': 'none'
      });
    } else if ($(this).is(':checked') && $(this).val() == 'tomorrow') {
      $('.delivery__time-1').css({
        'display': 'none'
      });
      $('.delivery__time-2').css({
        'display': 'block'
      });
      $('.delivery__time-3').css({
        'display': 'none'
      });
    }
  });


$("#datepicker").focus(function () {

  $("input[value='today']").prop("checked", false);
  $("input[value='tomorrow']").prop("checked", false);
  $('.delivery__time-1').css({
    'display': 'none'
  });
  $('.delivery__time-2').css({
    'display': 'none'
  });
  $('.delivery__time-3').css({
    'display': 'block'
  });

 
});

