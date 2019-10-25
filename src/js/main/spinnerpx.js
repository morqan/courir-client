$(document).ready(function(){
    $(".btn-submit").click(function(){
      alert($("#first_form").scrollTop() + " px");
    });
  });