$('.payment__dropdown-menu--item').click(function(){
    $( ".payment-active" ).find( ".payment-check" ).css( "display", "none" );
    $('.payment__dropdown-menu--item ').removeClass("payment-active");
    $(this).addClass("payment-active");
    $( ".payment-active" ).find( ".payment-check" ).css( "display", "block" );
    var text = $( ".payment-active" ).find( ".payment__text" ).find( "span" ).text() ;
    $('#payment').text(text);
    console.log(text);

});