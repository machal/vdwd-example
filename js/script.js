jQuery(document).ready(function($) {

  $('.variants-table').on('click', 'td', function(event) {
    $(this).closest('tr').find('.variants-table-radio input[type=radio]').attr('checked', 'checked');
  });

});
