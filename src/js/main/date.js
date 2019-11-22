// //  BUGÜN VƏ SABAHIN TARİXİNİN İNPUT NAME=DAY-DƏ GÖRSƏNMƏSİ
// $(function () {

//     var today = new Date();
//     var monthsname = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
//     var month = monthsname[today.getMonth()];
//     var date = today.getDate();
//     var hour = today.getHours();
//     var minute = today.getMinutes();
//     var time = hour + ":" + Math.ceil.minute;
//     var dateTime = date + ' ' + month;
//     var tomorrow = date + 1 + ' ' + month;
//     // var timeVal1 = $("input[name='time1']:checked").val();
//     // var timeVal2 =$("input[name='time2']:checked").val();

//     var monthStr = today.getMonth() + 1;
//     var year = today.getFullYear();


//     $("#today-span").html(dateTime);
//     $("#tomorrow-span").html(tomorrow);



//     //  CAROUSEL TİME İNPUT RADİO CLİCK ETDİKDƏ VALUE-SU  BUGUN SABAH CALENDAR İNPUTLARİNİN VALUE-SUNA YAZILIR
//     $("input[name='time1'],input[name='time2'] , input[name='time3']").click(function () {


//         var timeVal1 = $("input[name='time1']:checked").val();
//         var timeVal2 = $("input[name='time2']:checked").val();
//         var timeVal3 = $("input[name='time3']:checked").val();
//         var day3 = $(".calendar-label").html();


//         var todayStr = date + "/" + monthStr + "/" + year;
//         var tomorrowStr = date + 1 + "/" + monthStr + "/" + year;

//         var todayInput = document.getElementById("today");
//         todayInput.value = todayStr + " " + timeVal1;

//         var tomorrowInput = document.getElementById("tomorrow");
//         tomorrowInput.value = tomorrowStr + " " + timeVal2;
//         // var todayInput = document.getElementById("today");
//         // todayInput.value =day1 + " " + timeVal1;

//         // var tomorrowInput = document.getElementById("tomorrow");
//         // tomorrowInput.value =day2 + " " + timeVal2;

//         var calendarInput = document.getElementById("calendar");
//         calendarInput.value = day3 + " " + timeVal3;
//     });

// });



// $(document).ready(function () {


//     // var $current = $(".disable-label"); //the element you have
//     // var $elems = $('.times__label'); //the collection of elements
//     // var $previous = $elems.eq($elems.index($current) - 1); //the one you needed
//     // console.log($previous.addClass("disable-label"));

//     $( ".disable-label" ).attr('disabled', true);


    
//     $( ".disable-label" ).parent().prevAll().find('.times__label').css({ 'background-color': '#ababab',
//     'color': '#fff',
//     'border-radius': '5px',});

//     $( "#today" ).prop( "checked",  function() {
//         var dt = new Date();
//                 var time = dt.getHours();

//                 var timeLabel = $(".times__label").html();

//                 console.log(timeLabel);

//                 // if (timeLabel === time) {
//                 //     $(".times__label").addClass("disable-label")

//                 // }
//       });

//     // $('input:radio[name="day"]').change(
//     //     function () {
//     //         if ($("#today").prop('checked')) {
//     //             var dt = new Date();
//     //             var time = dt.getHours();

//     //             var timeLabel = $(".times__label").html();

//     //             if (timeLabel === time) {
//     //                 $(".times__label").addClass("disable-label")

//     //             }
//     //         }
//     //     });


// });




