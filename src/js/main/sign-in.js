$(document).ready(function () {

    $('#sign-in-form').submit(function (e) {
        e.preventDefault();

    });

    $("#phoneNumber").focus(function () {
        $(this).addClass("inputErrorBorder");
    });


    $("#phoneNumber").keypress(function () {

        var phoneNumber = $('#phoneNumber').val();
        phoneNumber = phoneNumber.replace(/[^0-9\.]+/g, '');
        if (phoneNumber.length != 11) {
            $('#phoneNumber').addClass("inputErrorBorder");
        } else if (phoneNumber.length == 11) {
            $('#phoneNumber').removeClass("inputErrorBorder");
        }

    });

});


// $(document).ready(function () {

//     $('#sign-in-form').submit(function (e) {
//         e.preventDefault();
//         $('#phoneNumber').addClass("inputErrorBorder");

//         if ($("#membership-checkbox[type=checkbox]").is( 
//             ":checked")) { 



//           } else { 
//             $(".account-sign-in-cover2__label").after('<span class="error">This field is required</span>');
//           } 
//     });

// });