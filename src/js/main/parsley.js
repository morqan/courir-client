$(document).ready(function () {

  $('#phoneNumber').mask('(00)0000000');
  $('#phone').mask('(00)0000000');
  $('#verify-number').mask('000000');


  $('#first_form').parsley().on('field:validated', function () {
    var ok = $('.parsley-error').length === 0

    
    
  })

    .on('form:submit', function () {
      return false; // Don't submit form for this demo
    });

});