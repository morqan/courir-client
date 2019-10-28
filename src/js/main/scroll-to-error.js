// $('.form-submit').click(function () {
//   var errorBox1 = $(".form__group").find('.error1');
//   var errorBox2 = $(".form__group").find('.error2');
//   var errorBox3 = $(".form__group").find('.error3');
//   var errorBox4 = $(".form__group").find('.error4');
//   if (errorBox1) {
//     $('#first_form').scrollTop(0);
//   } else if (errorBox2) {
//     $('#first_form').scrollTop(150);
//   } else if (errorBox3) {
//     $('#first_form').scrollTop(277);
//   } else if (errorBox4) {
//     $('#first_form').scrollTop(800);
//   }


// });


$('.form-submit').click(function () {
    $(".error").remove();
    $('#startPlace').removeClass("inputErrorBorder");
    $('#endPlace').removeClass("inputErrorBorder");
    $('#contact-message').removeClass("inputErrorBorder");

    if ($('#startPlace').val() === '') {
        $('#startPlace').addClass("inputErrorBorder").after('<span class="error error1">This field is required</span>');
        $('#first_form').animate({
            scrollTop: $('.error1').prop("scrollHeight")
        }, 800, function () {
            $('#startPlace').focus();
        });

    } else if ($('#endPlace').val() === '') {
        $('#endPlace').addClass("inputErrorBorder").after('<span class="error error2">This field is required</span>');
        $('#first_form').animate({
            scrollTop: $('.error2').prop("scrollHeight")
        }, 800, function () {
            $('#endPlace').focus();
        });
    }
    //  else if ($('input[type=radio][name=car2]:checked').length === 0) {
    //     $('#pills-car-tabContent-2').after('<span class="error error3">This field is required</span>');
    //     $("#first_form").animate({
    //         scrollTop: $('#pills-car-tabContent-2').prop("scrollHeight")
    //     }, 800);
    // }
     else if ($('input[type=radio][name=car]:checked').length === 0) {
        $('.owl-dots').after('<span class="error error3">This field is required</span>');
        $("#first_form").animate({
            scrollTop: $('#car-carousel').prop("scrollHeight")
        }, 800);
    } else if ($('#contact-message').val() === '') {
        $('#contact-message').addClass("inputErrorBorder").after('<span class="error error4">This field is required</span>');
        $('#contact-message').focus();

    }
    return false;
});