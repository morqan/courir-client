	// // VALİDATİON FOR İNDEX.HTML

	// $(document).ready(function () {

	// 	$('#first_form').submit(function (e) {
	// 		e.preventDefault();

	// 		// SCROLL TO ERROR

	// 		$(".error").remove();
	// 		$('#startPlace').removeClass("inputErrorBorder");
	// 		$('#endPlace').removeClass("inputErrorBorder");
	// 		$('#contact-message').removeClass("inputErrorBorder");

	// 		if ($('#startPlace').val() === '') {
	// 			$('#startPlace').addClass("inputErrorBorder").after('<span class="error error1">This field is required</span>');
	// 			$('#first_form').animate({
	// 				scrollTop: $('.error1').prop("scrollHeight")
	// 			}, 800, function () {
	// 				$('#startPlace').focus();
	// 			});

	// 		} else if ($('#endPlace').val() === '') {
	// 			$('#endPlace').addClass("inputErrorBorder").after('<span class="error error2">This field is required</span>');
	// 			$('#first_form').animate({
	// 				scrollTop: $('.error2').prop("scrollHeight")
	// 			}, 800, function () {
	// 				$('#endPlace').focus();
	// 			});
	// 		}


	// 		// FOR INDEX.HTML

	// 		//  else if ($('input[type=radio][name=car]:checked').length === 0) {
	// 		//     $('.owl-dots').after('<span class="error error3">This field is required</span>');
	// 		//     $("#first_form").animate({
	// 		//         scrollTop: $('#car-carousel').prop("scrollHeight")
	// 		//     }, 800);
	// 		// } 


	// 		// FOR INDEX-3.HTML
	// 		else if ($('input[type=radio][name=car2]:checked').length === 0) {
	// 			$('.pills-car-1__div').after('<span class="error">This field is required</span>');
	// 			$("#first_form").animate({
	// 				scrollTop: $('.swiper1').prop("scrollHeight")
	// 			}, 800);
	// 		} else if ($('#contact-message').val() === '') {
	// 			$('#contact-message').addClass("inputErrorBorder").after('<span class="error error4">This field is required</span>');
	// 			$('#contact-message').focus();

	// 		}
	// 		return false;

	// 		// var start_place = $('#startPlace').val();
	// 		// var end_place = $('#endPlace').val();
	// 		// var some_message = $('#contact-message').val();
	// 		// var email = $('#email').val();
	// 		// var password = $('#password').val();

	// 		// $(".error").remove();
	// 		// $('#startPlace').removeClass("inputErrorBorder");
	// 		// $('#endPlace').removeClass("inputErrorBorder");
	// 		// $('#contact-message').removeClass("inputErrorBorder");

	// 		// if (start_place.length < 1) {
	// 		// 	$('#startPlace').addClass("inputErrorBorder").after('<span class="error error1">This field is required</span>');
	// 		// }
	// 		// if (end_place.length < 1) {
	// 		// 	$('#endPlace').addClass("inputErrorBorder").after('<span class="error error2">This field is required</span>');
	// 		// }
	// 		// if (some_message.length < 1) {
	// 		// 	$('#contact-message').addClass("inputErrorBorder").after('<span class="error error4">This field is required</span>');
	// 		// }

	// 		// if ($('input[type=radio][name=car]:checked').length == 0) {
	// 		// 	$('.owl-dots').after('<span class="error error3">This field is required</span>');
	// 		// 	return false;
	// 		// }
	// 		// if (email.length < 1) {
	// 		// 	$('#email').after('<span class="error">This field is required</span>');
	// 		// } else {
	// 		// 	var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
	// 		// 	var validEmail = regEx.test(email);
	// 		// 	if (!validEmail) {
	// 		// 		$('#email').after('<span class="error">Enter a valid email</span>');
	// 		// 	}
	// 		// }
	// 		// if (password.length < 8) {
	// 		// 	$('#password').after('<span class="error">Password must be at least 8 characters long</span>');
	// 		// }
	// 	});
	// 	//  FROM İNPUTU
	// 	$("#startPlace").keypress(function () {
	// 		$('#startPlace').removeClass("inputErrorBorder");
	// 		$('#startPlace').next().remove();
	// 	});
	// 	//  DESTİNATİON İNPUTU
	// 	$("#endPlace").keypress(function () {
	// 		$('#endPlace').removeClass("inputErrorBorder");
	// 		$('#endPlace').next().remove();
	// 	});
	// 	//  MESSAGE TEXTAREASI
	// 	$("#contact-message").keypress(function () {
	// 		$('#contact-message').removeClass("inputErrorBorder");
	// 		$('#contact-message').next().remove();
	// 	});

	// 	// FOR INDEX.HTML

	// 	// $('input[type=radio][name=car]').change(function () {
	// 	// 	$('.owl-dots').next('.error').remove();
	// 	// });


	// 	// DAŞIMA NÖVÜ
	// 	$('input[type=radio][name=car2]').change(function () {
	// 		$('.pills-car-1__div').next('.error').remove();
	// 	});



	// });