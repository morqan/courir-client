$('input:radio[name="day"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'today') {
          $('.delivery__time-1').css({
            'display' : 'block'
          });
          $('.delivery__time-2').css({
            'display' : 'none'
          });
          $('.delivery__time-3').css({
            'display' : 'none'
          });
        }
        else if($(this).is(':checked') && $(this).val() == 'tomorrow') {
          $('.delivery__time-1').css({
            'display' : 'none'
          });
          $('.delivery__time-2').css({
            'display' : 'block'
          });
          $('.delivery__time-3').css({
            'display' : 'none'
          });
        }
        else if($(".calendar-input").prop('checked', true)) {
          $('.delivery__time-1').css({
            'display' : 'none'
          });
          $('.delivery__time-2').css({
            'display' : 'none'
          });
          $('.delivery__time-3').css({
            'display' : 'block'
          });

          // $("label[for='calendar']").css({
          //   'background-color': '#7b2bfc',
          //   'color': '#ffffff',
          // });

         
        }
    });


    // $( "#datepicker" ).focus(function() {

    //     $("input[value='day-1']" ).prop( "checked", false );
    //     $("input[value='day-2']" ).prop( "checked", false );
    //     $('.delivery__time-1').css({
    //         'display' : 'none'
    //       });
    //       $('.delivery__time-2').css({
    //         'display' : 'none'
    //       });
    //       $('.delivery__time-3').css({
    //         'display' : 'block'
    //       });
    //   });