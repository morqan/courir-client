$(document).ready(function(){
    $(".getToMap").click(function(){
      $(".inpBtn__box").hide();
      $(".formBox").removeClass('d-none');
    });

    $(".backToInpBtn__box").click(function(){
        $(".inpBtn__box").show();
        $(".formBox").addClass('d-none');
    });

    $(".inpBtn__link").click(function(){
        $(".formBox").addClass('d-none');
        $(".mapBox").removeClass('d-none');
      });

    $(".backToFormBox").click(function(){
        $(".mapBox").addClass('d-none');
        $(".formBox").removeClass('d-none');
    });

  
  });

