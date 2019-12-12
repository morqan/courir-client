// // FOR  INDEX.HTML  INDEX-3.HTML İNTERNATİONAL TELEPHONE İNPUT
$(document).ready(function () {

  var input = document.querySelector("#phoneNumber"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg");


//   // FOR ACCOUNT-SIGN-IN-COVER2.HTML
  $("#phoneNumber").intlTelInput({
    preferredCountries: ["us", "ca"],
    separateDialCode: false,
    initialCountry: "az",
    // autoPlaceholder: "polite",
    // allowDropdown: false,
 
    // separateDialCode: true,

  });


  input.addEventListener('countrychange', function () {
  
    var countryDialCode = $("#phoneNumber").intlTelInput("getSelectedCountryData").dialCode;
    console.log(countryDialCode);
      $('#phoneNumber').val('+' + countryDialCode);
    $("#dialCode").val(countryDialCode);
   
  });


//   var dialCode2 = $('.iti__selected-dial-code').text();
//   $('#phoneNumber').val(dialCode2);

//   // $('.iti__selected-dial-code').css({
//   //   'display': 'none'
//   // });

 

  // here, the index maps to the error code returned from getValidationError - see readme
  var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

  // initialise plugin
  var iti = window.intlTelInput(input, {
    utilsScript: "libs/intl-tel-input/build/js/utils.js"
  });



  var reset = function () {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("valid-hide");
    validMsg.classList.add("valid-hide");
  };

  // on blur: validate
  input.addEventListener('blur', function () {
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

  $('#use-sms').click(function () {
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
  


//   // PHONE INPUT DOESNT ACCEPT FIRST VALUE 0
//   $('#phone').on('input propertychange paste', function (e) {
//     var reg = /^0+/gi;
//     if (this.value.match(reg)) {
//       this.value = this.value.replace(reg, '');
//     }
//   });
//   // $('#phoneNumber').on('input propertychange paste', function (e) {
//   //     var reg = /^0+/gi;
//   //     if (this.value.match(reg)) {
//   //         this.value = this.value.replace(reg, '');
//   //     }
//   // });




});