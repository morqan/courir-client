$(document).ready(function () {

    var priceText = parseInt($(".price").text());
    totalPrice = $('.total__money').text(priceText);
    console.log(totalPrice, 'this');

    $('.insurance__div--input').on('keyup keypress blur', function (event) {
        var percent = 0.03;
        var insuranceInputVal = $(".insurance__div--input").val();
        //Input accept only number
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }

        if (insuranceInputVal.length > 0) {
            totalPrice = $('.total__money').text(parseInt($(".price").text()));

            var totalPercentVal = percent * insuranceInputVal;
            var totalPercentValRound = Math.ceil(totalPercentVal * 100) / 100;
            var InsurancePercent = $(".insurance__percent").text(totalPercentValRound);
            var totalPrice = parseInt($('.total__money').text());
            var total = totalPrice + totalPercentValRound;
            var totalMoney = $('.total__money').text(total);
            // totalPrice = $('.total__money').text(totalMoney + totalPercentVal);
        } else {
            var InsurancePercent = $(".insurance__percent").text('0');
            totalPrice = $('.total__money').text(parseInt($(".price").text()));
        }
    });
});