!function ($) {
  "use strict"; // Stick the header at top on scroll
  // $("#header").sticky({
  //   topSpacing: 0,
  //   zIndex: '50'
  // });

  $(document).ready(function () {
    var header = $("header");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 75) {
        header.removeClass('clearHeader').addClass("darkHeader");
      } else {
        header.removeClass("darkHeader").addClass('clearHeader');
      }
    });
    $('.header-nav-icon').click(function () {
      var divclass = $(this).attr('data-open'); //console.log(divclass);

      $('.nav-wrapper').removeClass('open');
      $('.nav-wrapper').removeClass('anim');
      $('.' + divclass).addClass('open');

      if (divclass === "location-nav" || divclass === "search-nav") {
        setTimeout(function () {
          $('.' + divclass).addClass('anim');
        }, 450);
      }
    });
    $('.nav-wrapper .close_btn').click(function () {
      $('.nav-wrapper').removeClass('open');
    });
    /* button animation */

    if ($(window).width() > 992) {
      $(".btn-primary").each(function () {
        $(this).append("<span>" + $(this).text() + "</span>");
      });
      $(".btn-primary").mouseenter(function (e) {
        $(this).removeClass('active');
        $(this).removeClass('done');
        $(this).addClass('active');
      });
      $(".btn-primary").mouseleave(function (e) {
        var _this = $(this);

        $(_this).addClass('done');
        setTimeout(function () {
          $(_this).removeClass('active');
          $(_this).removeClass('done');
        }, 400);
      });
    } // Initi AOS


    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back"
    });
  });
}(jQuery);
/* for svg image */

document.querySelectorAll('img.svg').forEach(function (img) {
  var imgID = img.id;
  var imgClass = img.className;
  var imgURL = img.src;
  fetch(imgURL).then(function (response) {
    return response.text();
  }).then(function (text) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(text, "text/xml"); // Get the SVG tag, ignore the rest

    var svg = xmlDoc.getElementsByTagName('svg')[0]; // Add replaced image's ID to the new SVG

    if (typeof imgID !== 'undefined') {
      svg.setAttribute('id', imgID);
    } // Add replaced image's classes to the new SVG


    if (typeof imgClass !== 'undefined') {
      svg.setAttribute('class', imgClass + ' replaced-svg');
    } // Remove any invalid XML tags as per http://validator.w3.org


    svg.removeAttribute('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

    if (!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
      svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'));
    } // Replace image with new SVG


    img.parentNode.replaceChild(svg, img);
  });
});
/* ======================== end svg ====================== */