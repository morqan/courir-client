// //  İNDEXDƏ FORMDA OLAN ÖDƏNİŞ NÖVÜNÜN SEÇİLMƏSİ
// $(document).ready(function () {
//     $('.payment__dropdown-menu--item').click(function () {
//         $(".payment-active").find(".payment-check").css("display", "none");
//         $('.payment__dropdown-menu--item ').removeClass("payment-active");
//         $(this).addClass("payment-active");
//         $(".payment-active").find(".payment-check").css("display", "block");
//         var myDiv = $(".payment-active").find(".payment__text").clone();
//         $("#payment").find(".payment__text").remove();
//         $(myDiv).appendTo("#payment");



//     });



//     $('.payment__dropdown-menu--item ').click(function () {
//         var name = $(".payment-active").attr('data-id'); // `this` here refers to the current p you clicked on


//         $("#payment-hidden").val(name);
//         console.log(name);
//     });
// });


// 
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('div');
    this.opts = this.dd.find('ul.payment__drop li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;
        obj.dd.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('active');
           
        });
        obj.opts.on('click', function () {
            var checkmark = '<i class="fas fa-check color-purple ml-auto payment__drop--checkmark"></i>';
            var opt = $(this);
            obj.val = opt.html();
            obj.valText = opt.text();
            obj.index = opt.index();
            obj.placeholder.html(obj.val);
            opt.siblings().removeClass('selected');
            opt.siblings().children().last().removeClass( "fas fa-check payment__drop--checkmark" );
            // opt.siblings().remove( '<i class="fas fa-check color-purple ml-auto payment__drop--checkmark"></i>' );
            opt.filter(':contains("' + obj.valText + '")').addClass('selected');
            var dataID = $(".selected").attr('data-id');
            $("#payment-hidden").val(dataID);
            $( ".selected" ).children().last().addClass( "fas fa-check payment__drop--checkmark" );
            // $( ".selected" ).add('<i class="fas fa-check color-purple ml-auto payment__drop--checkmark"></i>' );
        }).change();
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    // create new variable for each menu
    var dd1 = new DropDown($('#paymentMethod'));
    // var dd2 = new DropDown($('#other-gases'));
    $(document).click(function () {
        // close menu on document click
        $('.payment__wrap-drop').removeClass('active');
    });
});