$(document).ready(function () {

    var priceText = parseInt($(".price").text());
    totalPrice = $('.total__money').text(priceText);

    $('.insurance__div--input').on('keyup  mouseup mousewheel', function () {
        var percent = 0.03;
        var insuranceInputVal = $(".insurance__div--input").val();
        
        if (insuranceInputVal.length >= 0) {

            var totalPercentVal =  percent * insuranceInputVal;
            var totalPercentValRound =Math.ceil(totalPercentVal * 100) / 100;
            var InsurancePercent = $(".insurance__percent").text(totalPercentValRound);
            var totalPrice = parseInt($('.total__money').text());
            var total = totalPrice + totalPercentValRound;
            var totalMoney = $('.total__money').text(total);
            // totalPrice = $('.total__money').text(totalMoney + totalPercentVal);
        }
    });
});