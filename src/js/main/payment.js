$('.payment__dropdown-menu--item').click(function(){
    $( ".payment-active" ).find( ".payment-check" ).css( "display", "none" );
    $('.payment__dropdown-menu--item ').removeClass("payment-active");
    $(this).addClass("payment-active");
    $( ".payment-active" ).find( ".payment-check" ).css( "display", "block" );
    var text = $( ".payment-active" ).find( ".payment__text" ).find( "span" ).text() ;
    $('#payment').text(text);
    // console.log(text);

});
// $(".payment__dropdown--btn").change(function(){
//     var displaycourse = $(".payment__dropdown-menu .payment__dropdown-menu--item:focus")
//     $(".payment__dropdown--btn").val(displaycourse);
//      console.log(displaycourse);
// });