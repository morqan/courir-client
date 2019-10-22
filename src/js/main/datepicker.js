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
	$('input').addClass('.datepicker__input ').css({
		'color': '#ffffff'
	});
});

$('.day__link1').click(function () {
	$("input").addClass('.datepicker__input ').css({
		'color': '#000000'
	});
});
