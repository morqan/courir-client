
// FOR INDEX.HTML

// $('#truck').change(function () {
//   $('#labor, #packing').css({
//     'display': 'block'
//   });
// });

// $('.car-hide').change(function () {
//   $('#labor, #packing').css({
//     'display': 'none'
//   });
// });




// FOR INDEX-5.HTML
$('#car-tab1').click(function () {
  $('#labor, #packing').css({
    'display': 'block'
  });
});

$('#car-tab1, #car-tab2').click(function () {
  $('#labor, #packing').css({
    'display': 'none'
  });
});

