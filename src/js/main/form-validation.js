	
$(document).ready(function() {
 
  $('#first_form').submit(function(e) {
    e.preventDefault();
    var start_place = $('#startPlace').val();
    var end_place = $('#endPlace').val();
    var some_message = $('#some_message').val();
    var email = $('#email').val();
    var password = $('#password').val();
 
    $(".error").remove();
 
    if (start_place.length < 1) {
      $('#startPlace').after('<span class="error">This field is required</span>');
    }
    if (end_place.length < 1) {
      $('#endPlace').after('<span class="error">This field is required</span>');
    }
    if (some_message.length < 1) {
        $('#some_message').after('<span class="error">This field is required</span>');
      }
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }
    }
    if (password.length < 8) {
      $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
    }
  });
 
});