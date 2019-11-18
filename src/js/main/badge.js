//  HEADER-DA HAMBURGER MENUNUN ÜZƏRİNDƏ NOTİFİCATİONUN GÖRSƏNMƏSİ

$(function () { 
    $('.header__toggler').on('click', function () {
      
        if ($(this).attr( 'aria-expanded') === 'true') {
            $(".header__toggler--badge").css( "display", "block" );
        } else {
            $(".header__toggler--badge").css( "display", "none" );
        }
    });
});