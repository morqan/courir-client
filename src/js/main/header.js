// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }

  $('#openNav').click(function () {
    $('#mySidenav').css({
      'width': '100vw',
    });
  });
  $('#closeNav').click(function () {
    $('#mySidenav').css({
      'width': '0'
    });
  });

  // $('#navbar-toggler').click(function () {
  //   $("#navigation-menu").addClass("show");
  // });


//   $('#navbar-toggler').on('click', function () {
//     $("#navigation-menu").toggleClass('show')
// });

// $(function () { 
//   $('#navbar-toggler').on('click', function (e) {
//       var menuItem = $( e.currentTarget );

//       if (menuItem.attr( 'aria-expanded') === 'true') {
//           $(this).attr( 'aria-expanded', 'false');
//       } else {
//           $(this).attr( 'aria-expanded', 'true');
//       }
//   });
// });

//   $('#navbar-toggler').on('click', function () {
//    $("#navbar-toggler").attr("aria-expanded","false");
// });

