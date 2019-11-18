
  $( document ).ready(function() {
    $('#first_form').parsley().on('field:validated', function() {
        var ok = $('.parsley-error').length === 0;
       

      })
      .on('form:submit', function() {
        return false; // Don't submit form for this demo
      });
});