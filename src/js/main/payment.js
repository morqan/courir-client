//  İNDEXDƏ FORMDA OLAN ÖDƏNİŞ NÖVÜNÜN SEÇİLMƏSİ
$(document).ready(function () {
$('.payment__dropdown-menu--item').click(function () {
    $(".payment-active").find(".payment-check").css("display", "none");
    $('.payment__dropdown-menu--item ').removeClass("payment-active");
    $(this).addClass("payment-active");
    $(".payment-active").find(".payment-check").css("display", "block");
    var myDiv = $(".payment-active").find(".payment__text").clone();
    $("#payment").find(".payment__text").remove();
    $(myDiv).appendTo("#payment");



});



$('.payment__dropdown-menu--item ').click(function () {
    var name = $(".payment-active").attr('data-id'); // `this` here refers to the current p you clicked on
 
    
    $("#payment-hidden").val(name);
    console.log(name);
});
});