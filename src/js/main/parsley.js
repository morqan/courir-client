$(document).ready(function () {
  $('#verify-number').mask('000000');
  $('#sign-in-form').parsley().on('field:validated', function () {
    var ok = $('.parsley-error').length === 0

    $("#phoneNumber").removeClass('parsley-success');
   

    var parsleyError = $('#sign-in-form').find('.parsley-error')
    if(parsleyError){
      $('#sign-in-form').find(".iti__selected-flag").css({
        'height': '70%'
      });
    }
    // else{
    //   $('#sign-in-form').find(".iti__selected-flag").css({
    //     'height': '100%'
    //   });
    // }
   
    $("#phoneNumber").addEventListener('keyup', function() {
      $("#phoneNumber").removeClass('parsley-error');
    });
  })

  $('#first_form').parsley().on('field:validated', function () {
    var ok = $('.parsley-error').length === 0

    $('.insurance__div--input-group').find('.parsley-errors-list').css({
      'order': '3',
    
      'flexWrap': 'wrap',
      'width': '100%'
    });
    
  })

    .on('form:submit', function () {
      return false; // Don't submit form for this demo
    });

});