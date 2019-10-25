

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
var el = $('.error');

if (el.length) {
    $('html, body').find('#first_form').animate({
            scrollTop: (el.first())
    },500);
}
});