// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }

  $('#openNav').click(function () {
    $('#mySidenav').css({
      'width': '250px'
    });
  });
  $('#closeNav').click(function () {
    $('#mySidenav').css({
      'width': '0'
    });
  });