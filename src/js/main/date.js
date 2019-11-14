

$(function () {

    var today = new Date();
    var monthsname = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
    var month = monthsname[today.getMonth()];
    var date = today.getDate();
    var dateTime = date + ' ' + month;
    var tomorrow = date + 1 + ' ' + month;

    $("#today-span").html(dateTime);
     $("#tomorrow-span").html(tomorrow);
  
});