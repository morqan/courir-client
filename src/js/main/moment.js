//  BUGÜN VƏ SABAHIN TARİXİNİN İNPUT NAME=DAY-DƏ GÖRSƏNMƏSİ
$(document).ready(function () {

    var currentTime = moment().startOf('hour').add(1, 'h').format("HH:mm");
    var currentHour = moment().startOf('hour').add(1, 'h').format("HH");
    var enableHoursToday = 24 - currentHour;
    var today = moment().locale("az").format("DD MMMM");
    var tomorrow = moment().add(1, 'days').format("DD MMMM");
    var todaySlash = moment().format('L');
    var tomorrowSlash = moment().add(1, 'days').format('L');

    var todayVal = document.getElementById("today");
    var tomorrowVal = document.getElementById("tomorrow");
    todayVal.value = todaySlash + " " + currentTime;
    tomorrowVal.value = tomorrowSlash + " " + currentTime;

    $('#today-span').html(today);
    $('#tomorrow-span').html(tomorrow);


console.log('test',enableHours);


  
  
    var text = "";
    
    for (; i < enableHoursToday ; i++) {
         var currentTime = moment().startOf('hour').add(i+2, 'h').format("HH:mm")
      text += ` <div class="form-check"> <input class="times__input form-check-input" type="radio" name="time1" id="${ hours[i]}" value="08:00" /> <label class="times__label  form-check-label"  for="${ hours[i]}">${ currentTime}</label></div>`;
    
      document.getElementById("delivery__time").innerHTML = text;
    }
   
  


});

//  TODAY TOMORROW CALENDARI DƏYİŞDİKDƏ CAROUSEL TİME DƏYİŞİR
$(document).ready(function () {
    $('input:radio[name="day"]').change(
        function () {
            if ($(".today").prop('checked')) {
                $('.delivery__time').css({
                    'display': 'block'
                });

            }
            // else if ($(".tomorrow").prop('checked')) {
            //   $('.delivery__time-1').css({
            //     'display': 'none'
            //   });
            //   $('.delivery__time-2').css({
            //     'display': 'block'
            //   });
            //   $('.delivery__time-3').css({
            //     'display': 'none'
            //   });
            // } else if ($(".calendar-input").prop('checked')) {
            //   $('.delivery__time-1').css({
            //     'display': 'none'
            //   });
            //   $('.delivery__time-2').css({
            //     'display': 'none'
            //   });
            //   $('.delivery__time-3').css({
            //     'display': 'block'
            //   });
            // }
        });
});