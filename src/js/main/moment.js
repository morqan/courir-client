

$(document).ready(function () {
    var dayHours = 24; 
    var currentTime = moment().startOf('hour').add(1, 'h').format("HH:mm");
    var currentHour = moment().startOf('hour').add(1, 'h').format("HH");
    var enableHoursToday = dayHours - currentHour;
    var today = moment().locale("az").format("DD MMMM");
    var tomorrow = moment().add(1, 'days').format("DD MMMM");
   
//  BUGÜN VƏ SABAHIN TARİXİNİN İNPUT NAME=DAY-DƏ GÖRSƏNMƏSİ

    var todaySlash = moment().format('L');
    var tomorrowSlash = moment().add(1, 'days').format('L');

    var todayVal = document.getElementById("today");
    var tomorrowVal = document.getElementById("tomorrow");

    
    todayVal.value = todaySlash + " " + currentTime;
    tomorrowVal.value = tomorrowSlash + " " + currentTime;

//  BUGÜN VƏ SABAHIN TARİXİNİN İNPUT NAME=DAY-DƏ GÖRSƏNMƏSİ
    $('#today-span').html(today);
    $('#tomorrow-span').html(tomorrow);

    var text = "";
    $(document).on('change', 'input:radio[name="day"]', function() {

            if ($(".today").prop("checked")) {

                for (i = 0; i < dayHours; i++) {
                    
                    $('#delivery__time').trigger('remove.owl.carousel',i).trigger('refresh.owl.carousel');
                }
                for (i = 0; i < enableHoursToday; i++) {
                    
                    var currentTime = moment().startOf('hour').add(i + 2, 'h').format("HH:mm");

                    $('#delivery__time').trigger('add.owl.carousel', ['<div class="form-check">\n' +
                    '<input class="times__input form-check-input" type="radio" name="time1" id="'+ i +'" />' +
                    ' <label class="times__label  form-check-label"  for="'+ i +'" >' + currentTime +
                    '</label>\n' +
                    '</div>' ]).trigger('refresh.owl.carousel');
                  
                }
            }
            
            
            else if ($(".tomorrow, .calendar-input").prop("checked")) {
                for (i = 0; i < enableHoursToday; i++) {
                    $('#delivery__time').trigger('remove.owl.carousel',i).trigger('refresh.owl.carousel');
                }
                for (i = 0; i < dayHours; i++) {                
                    var tomorrowHours = moment().startOf('day').add(i, 'h').format("HH:mm");
                    $('#delivery__time').trigger('add.owl.carousel', [   '<div class="form-check">\n' +
                    '<input class="times__input form-check-input" type="radio" name="time1" id="'+ i +'" />' +
                    ' <label class="times__label  form-check-label"  for="'+ i +'" >' + tomorrowHours +
                    '</label>\n' +
                    '</div>'  ]).trigger('refresh.owl.carousel');
                }
            }
        });
});
