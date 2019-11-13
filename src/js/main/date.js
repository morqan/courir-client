$(function () {
   
    var date = new Date();
var months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
"İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
var d = date.getDate()

// document.getElementById("today-month-span").innerHTML = months[date.getMonth()] ;

$("#today-month-span,#tomorrow-day-span").html(months[date.getMonth()] );

document.getElementById("today-day-span").innerHTML = d;
});