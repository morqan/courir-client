$("#pills-non-urgent-tab").prop("checked", true);

$('input:radio[name="urgent"]').change(

  function () {

    if ($(this).is(':checked') && $(this).val() == 'non-urgent') {
      $('#delivery').css({
        'display': 'block'
      });

    } else if ($(this).is(':checked') && $(this).val() == 'urgent') {
      $('#delivery').css({
        'display': 'none'
      });
    }
  });



// LOCAL STORAGE FOR INPUT RADIO 

$(function () {
  $('input:radio[name="urgent"]').each(function () {
    var state = JSON.parse(localStorage.getItem('radio_' + $(this).attr('id')));

    if (state) this.checked = state.checked;
    if ($(this).is(':checked') && $(this).val() == 'non-urgent') {
      $('#delivery').css({
        'display': 'block'
      });

    } else if ($(this).is(':checked') && $(this).val() == 'urgent') {
      $('#delivery').css({
        'display': 'none'
      });
    }
  });
});

$(window).bind('unload', function () {
  $('input:radio[name="urgent"]').each(function () {
    localStorage.setItem('radio_' + $(this).attr('id'), JSON.stringify({
      checked: this.checked
    }));
  });
});