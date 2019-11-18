//  DATEPICKER  IN INDEX.HTML, INDEX-3.HTML
$(document).ready(function () {
    $("#datepicker").datepicker({
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
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "",

        // VAXTIN İNPUT NAME=DAY-DƏ  VƏ VALUE-SUNDA GÖRSƏNMƏSİ
        onSelect: function () {
            $("label[for='calendar']").text($(this).val());
            var calendarInput = document.getElementById("calendar");
            var timeVal4 =$("input[name='time3']:checked").val();
            calendarInput.value =$(this).val() + " " + timeVal4 ;
        }
    });

    // İNPUT RADİONU CLİCKLƏDİKDƏ DATEPİCKERİN GÖRSƏNMƏSİ
    $("#calendar").click(function () {
    
        $("#datepicker").datepicker("show");
        });
});
