

  // $('.urgent__label--1').click(function(){
  //   $('#delivery').css({
  //     'display' : 'none'
  //   });
  // });

  // $('.urgent__label--2').click(function(){
  //   $('#delivery').css({
  //     'display' : 'block'
  //   });
  // });


  $('input:radio[name="urgent"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'urgent') {
          $('#delivery').css({
            'display' : 'none'
          });
        }
        else if($(this).is(':checked') && $(this).val() == 'non-urgent') {
          $('#delivery').css({
            'display' : 'block'
          });
        }
    });