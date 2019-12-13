//  DATEPICKER  IN INDEX.HTML, INDEX-3.HTML
$(document).ready(function () {
    var date = new Date();
  
    date.setDate(date.getDate());
    $("#datepicker").datepicker({
        startDate: date,
        duration: "fast",
        gotoCurrent: true,
        closeText: "Bağla",
        prevText: "&#x3C;Geri",
        nextText: "İrəli&#x3E;",
        currentText: "Bugün",
        monthNames: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun",
            "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
        ],
        monthNamesShort: ["Yan", "Fev", "Mar", "Apr", "May", "İyun",
            "İyul", "Avq", "Sen", "Okt", "Noy", "Dek"
        ],
        dayNames: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
        dayNamesShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
        dayNamesMin: ["B", "B", "Ç", "С", "Ç", "C", "Ş"],
        weekHeader: "Hf",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "",
        minDate: 0, // disable past date
        minTime: 0, // disable past time
   
        // VAXTIN İNPUT NAME=DAY-DƏ  VƏ VALUE-SUNDA GÖRSƏNMƏSİ
        onSelect: function () {
            $("label[for='calendar']").text($(this).val());
            $( "input[data-item-id=calendarTimes]" ).prop( "checked", false );
        }
    });

    // İNPUT RADİONU CLİCKLƏDİKDƏ DATEPİCKERİN GÖRSƏNMƏSİ
    $("#calendar").click(function () {

        $("#datepicker").datepicker("show");
    });
});
