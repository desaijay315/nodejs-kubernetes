window.onload = function () {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.card-col',
    layoutMode: 'fitRows'
  }); // filter functions

  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function numberGreaterThan50() {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function ium() {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  }; // bind filter button click

  $('.filters-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter'); // use filterFn if matches value

    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
      filter: filterValue
    });
  }); // change active class on buttons

  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });
};