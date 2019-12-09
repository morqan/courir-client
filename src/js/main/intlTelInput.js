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
    // PHONE INPUT DOESNT ACCEPT FIRST VALUE 0
    $('#phone').on('input propertychange paste', function (e) {
        var reg = /^0+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
    });
    $('#phoneNumber').on('input propertychange paste', function (e) {
        var reg = /^0+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
    });

    $('#phoneNumber').mask('(00)0000000');
    $('#phone').mask('(00)0000000');
    $('#verify-number').mask('000000');
    
   
});
