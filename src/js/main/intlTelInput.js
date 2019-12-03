// FOR  INDEX.HTML  INDEX-3.HTML İNTERNATİONAL TELEPHONE İNPUT
$(document).ready(function () {
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
});
