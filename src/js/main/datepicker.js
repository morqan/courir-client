$(function () {
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
		yearSuffix: ""
	});
});
$('.datepicker__link').click(function () {
	$('.datepicker__input ').css({
		'color': '#ffffff',
		'background-color': '#7b2bfc',
		'border-radius': '10px'
	});
});
$('input:radio[name="day"]').click(function () {
	$('.datepicker__input ').css({
		'color': '#000000',
		'background-color': '#f5f5f5',
		'border-radius': '10px'
	});
});

// $( ".datepicker__link" ).focus(function() {
// 	$('.datepicker__input ').css({
// 				'color': '#ffffff',
// 				'background-color': '#7b2bfc',
// 				'border-radius': '10px'
// 			});
//   });


