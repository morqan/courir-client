// $(document).ready(function () {

//     $('#sign-in-form').submit(function (e) {
//         e.preventDefault();

//     });

//     $("#phoneNumber").focus(function () {
//         $(this).addClass("inputErrorBorder");
//     });


//     $("#phoneNumber").keypress(function () {

//         var phoneNumber = $('#phoneNumber').val();
//         phoneNumber = phoneNumber.replace(/[^0-9\.]+/g, '');
//         if (phoneNumber.length != 11) {
//             $('#phoneNumber').addClass("inputErrorBorder");
//         } else if (phoneNumber.length == 11) {
//             $('#phoneNumber').removeClass("inputErrorBorder");
//         }

//     });

// });



//  FORM SUBMİT  FOR  ACCOUNT-SİGN-İN-COVER2.HTML
$(document).ready(function () {

    $('#sign-in-form').submit(function (e) {
        e.preventDefault();
        $('#phoneNumber').addClass("inputErrorBorder");

        $('#membership-checkbox[type="checkbox"]').click(function () {
            if ($(this).prop("checked") == true) {
                $('.membership-span').removeClass("inputErrorBorder");
            } else {
                $('.membership-span').addClass("inputErrorBorder");
            }

        });

        if ($("#membership-checkbox").prop("checked") == false) {
            $('.membership-span').addClass("inputErrorBorder");

        }



    });
    // $("#phoneNumber").focus(function () {
    //     $(this).addClass("inputErrorBorder");
    // });


    $("#phoneNumber").keydown(function () {

        var phoneNumber = $('#phoneNumber').val();
        intRegex = /[0-9 -()+]+$/;
        // phoneNumber = phoneNumber.replace(/[^0-9\.]+/g, '');
        if (phoneNumber.length != 12  || (!intRegex.test(phoneNumber))) {
           
            $('#phoneNumber').addClass("inputErrorBorder");
        } else  {
        
            $('#phoneNumber').removeClass("inputErrorBorder");
        } 

    });

  
});