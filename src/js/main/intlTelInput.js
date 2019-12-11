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

    var dialCode = $('.iti__selected-dial-code').text();
    // if(dialCode ){

    // }
    console.log(dialCode);
    $('#phoneNumber').val(dialCode);

    $('.iti__selected-dial-code').css({
        'display': 'none'
    });

    var input = document.querySelector("#phoneNumber"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin
var iti = window.intlTelInput(input, {
  utilsScript: "libs/intl-tel-input/build/js/utils.js"
});

var reset = function() {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("valid-hide");
  validMsg.classList.add("valid-hide");
};

// on blur: validate
input.addEventListener('blur', function() {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("valid-hide");
    } else {
      input.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("valid-hide");
    }
  }
});

// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);

    // PHONE INPUT DOESNT ACCEPT FIRST VALUE 0
    $('#phone').on('input propertychange paste', function (e) {
        var reg = /^0+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
    });
    // $('#phoneNumber').on('input propertychange paste', function (e) {
    //     var reg = /^0+/gi;
    //     if (this.value.match(reg)) {
    //         this.value = this.value.replace(reg, '');
    //     }
    // });

    // $('#phoneNumber').mask('(00)0000000');
    $('#phone').mask('(00)0000000');
    $('#verify-number').mask('000000');


});