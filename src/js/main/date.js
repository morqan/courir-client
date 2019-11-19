//  BUGÜN VƏ SABAHIN TARİXİNİN İNPUT NAME=DAY-DƏ GÖRSƏNMƏSİ
$(function () {

    var today = new Date();
    var monthsname = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
    var month = monthsname[today.getMonth()];
    var date = today.getDate();
    var dateTime = date + ' ' + month;
    var tomorrow = date + 1 + ' ' + month;
    var timeVal1 = $("input[name='time1']:checked").val();
    var timeVal2 =$("input[name='time2']:checked").val();

    var monthStr = today.getMonth() + 1;
    var year = today.getFullYear();

    var todayStr = date + "/" + monthStr + "/" + year;
    var tomorrowStr = date + 1 + "/" + monthStr + "/" + year;

    var todayInput = document.getElementById("today");
    todayInput.value = todayStr + " " + timeVal1;

    var tomorrowInput = document.getElementById("tomorrow");
    tomorrowInput.value =tomorrowStr + " " + timeVal2;

    $("#today-span").html(dateTime);
    $("#tomorrow-span").html(tomorrow);

});