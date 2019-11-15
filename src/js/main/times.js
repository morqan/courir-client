//  TODAY TOMORROW CALENDARI DƏYİŞDİKDƏ CAROUSEL TİME DƏYİŞİR
$('input:radio[name="day"]').change(
  function () {
    if ($(".today").prop('checked')) {
      $('.delivery__time-1').css({
        'display': 'block'
      });
      $('.delivery__time-2').css({
        'display': 'none'
      });
      $('.delivery__time-3').css({
        'display': 'none'
      });
    } else if ($(".tomorrow").prop('checked')) {
      $('.delivery__time-1').css({
        'display': 'none'
      });
      $('.delivery__time-2').css({
        'display': 'block'
      });
      $('.delivery__time-3').css({
        'display': 'none'
      });
    } else if ($(".calendar-input").prop('checked')) {
      $('.delivery__time-1').css({
        'display': 'none'
      });
      $('.delivery__time-2').css({
        'display': 'none'
      });
      $('.delivery__time-3').css({
        'display': 'block'
      });
     

    }
  });

//  CAROUSEL TİME İNPUT RADİO CLİCK ETDİKDƏ VALUE-SU  BUGUN SABAH CALENDAR İNPUTLARİNİN VALUE-SUNA YAZILIR

$(document).ready(function () {

  $("input[name='time1'],input[name='time2'] , input[name='time3']").click(function () {

    
    var timeVal1 = $("input[name='time1']:checked").val();
    var timeVal2 =$("input[name='time2']:checked").val();
    var timeVal3 =$("input[name='time3']:checked").val();
    var day1 = $('#today-span').html();
    var day2 = $('#tomorrow-span').html();
    var day3 = $(".calendar-label").html();

    var todayInput = document.getElementById("today");
    todayInput.value = timeVal1+ " " + day1;

    var tomorrowInput = document.getElementById("tomorrow");
    tomorrowInput.value = timeVal2+ " " + day2;

    var calendarInput = document.getElementById("calendar");
    calendarInput.value = timeVal3+ " " + day3;
  });
});