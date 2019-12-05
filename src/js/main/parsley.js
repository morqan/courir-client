$(document).ready(function () {

  $('#phoneNumber').mask('(00)0000000');
  $('#phone').mask('(00)0000000');
  $('#verify-number').mask('000000');


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