// // $(document).ready(function () {

// //     $('#sign-in-form').submit(function (e) {
// //         e.preventDefault();

// //     });

// //     $("#phoneNumber").focus(function () {
// //         $(this).addClass("inputErrorBorder");
// //     });


// //     $("#phoneNumber").keypress(function () {

// //         var phoneNumber = $('#phoneNumber').val();
// //         phoneNumber = phoneNumber.replace(/[^0-9\.]+/g, '');
// //         if (phoneNumber.length != 11) {
// //             $('#phoneNumber').addClass("inputErrorBorder");
// //         } else if (phoneNumber.length == 11) {
// //             $('#phoneNumber').removeClass("inputErrorBorder");
// //         }

// //     });

// // });



// //  FORM SUBMİT  FOR  ACCOUNT-SİGN-İN-COVER2.HTML
// $(document).ready(function () {

//     $('#sign-in-form').submit(function (e) {
//         e.preventDefault();
//         $('#phoneNumber').addClass("inputErrorBorder");

//         $('#membership-checkbox[type="checkbox"]').click(function () {
//             if ($(this).prop("checked") == true) {
//                 $('.membership-span').removeClass("inputErrorBorder");
//             } else {
//                 $('.membership-span').addClass("inputErrorBorder");
//             }

//         });

//         if ($("#membership-checkbox").prop("checked") == false) {
//             $('.membership-span').addClass("inputErrorBorder");

//         }



//     });
//     // $("#phoneNumber").focus(function () {
//     //     $(this).addClass("inputErrorBorder");
//     // });


//     // $("#phoneNumber").keydown(function () {

//     //     var phoneNumber = $('#phoneNumber').val();
//     //     intRegex = /[0-9 -()+]+$/;
//     //     // phoneNumber = phoneNumber.replace(/[^0-9\.]+/g, '');
//     //     if (phoneNumber.length != 12  || (!intRegex.test(phoneNumber))) {
           
//     //         $('#phoneNumber').addClass("inputErrorBorder");
//     //     } else  {
        
//     //         $('#phoneNumber').removeClass("inputErrorBorder");
//     //     } 


//     // });

  
// });

// $(document).ready(function () { 
//     var testPattern = new RegExp("^(\\+)?(\\d+)$");
//     $('#phoneNumber').on('keyup', function(){
//         if($(this).val().length == 1 || ($(this).val().length == 2 && $('#phoneNumber').val().charAt($('#phoneNumber').val().length-1) == "0" ))$(this).val('+');
//       else{
//             var res = chkInput();
//             if(!res)$(this).val($(this).val().slice(0, -1));
//             }
     
//     });
//     function chkInput(){
//         var v = $('#phoneNumber').val().charAt($('#phoneNumber').val().length-1);
//         return testPattern.test(v);
//     }
// })