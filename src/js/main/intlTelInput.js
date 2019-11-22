// FOR  INDEX.HTML  INDEX-3.HTML İNTERNATİONAL TELEPHONE İNPUT
$("#phone").intlTelInput({

    autoPlaceholder: "polite",
    allowDropdown: true,
    initialCountry: "az",
    separateDialCode: true,

});

// FOR ACCOUNT-SIGN-IN-COVER2.HTML
$("#phoneNumber").intlTelInput({

    autoPlaceholder: "polite",
    allowDropdown: true,
    initialCountry: "az",
    separateDialCode: true,

});

// $("#phoneNumber").focus(function () {
//     $(".iti__selected-flag").css({
//         'height': '75%',
//     });
// });