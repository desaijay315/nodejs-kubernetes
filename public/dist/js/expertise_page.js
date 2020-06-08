$(document).ready(function () {
  $(".scroll_tabs_section").sticky({
    topSpacing: 73,
    zIndex: '50'
  });

  if (window.innerWidth < 992) {
    $(".scroll_tabs_section").sticky({
      topSpacing: 49,
      zIndex: '50'
    });
  }

  var headerHeight = $('header').height();
  var tabsHeight = $('.scroll_tabs_section').height();
  var topHeight = headerHeight + tabsHeight;
  $('.scroll-tabs li a').bind('click', function (e) {
    e.preventDefault();
    var self = $(this);
    var scrollArea = $('.scroll-tabs');
    var leftOffset = self.offset().left - scrollArea.offset().left + scrollArea.scrollLeft() - 40;
    var target = $(this).attr("href");
    scrollArea.animate({
      scrollLeft: leftOffset
    });
    $('.scroll-tabs li a.active').removeClass('active');
    self.addClass('active');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - topHeight
    }, 600, function () {//location.hash = target; //attach the hash (#jumptarget) to the pageurl
    });
    return false;
  });
  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop() + topHeight + 30;
    $('.expertise_section').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $('.expertise_section').removeClass('active');
        $(this).addClass('active');
        $('.scroll-tabs li a.active').removeClass('active');
        $('.scroll-tabs li a').eq(i).addClass('active');
      }
    });
  }).scroll(); // var hashtarget = window.location.hash;
  // if ($(hashtarget).length > 0) {
  //     $('html, body').animate({
  //         scrollTop: $(hashtarget).offset().top - 145
  //     }, 1000);
  // } else {
  // }

  $('.link-start').click(function () {
    console.log(topHeight);
    $(this).closest('.content-block-container').find('.content-main').slideUp();
    $(this).closest('.content-block-container').find('.expertise-form').slideDown();
    $("html, body").animate({
      scrollTop: $(this).closest('.content-block-container').find('.content-main').offset().top - topHeight - 60
    }, 1000);

    if ($(window).width() < 992) {
      $("html, body").animate({
        scrollTop: $(this).closest('.content-block-container').find('.content-main').offset().top - topHeight - 30
      }, 1000);
    }

    return false;
  });
  $('.content-block .card-block a.popup_link').click(function () {
    $(this).closest('.content-block-container').find('.content-block').slideUp();
    var id = $(this).attr('data-link');
    $("div.content-popup").each(function () {
      $(this).hide();

      if ($(this).attr('data-detail') == id) {
        $(this).show();
      }
    }); //$(this).closest('.content-block-container').find('.content-block').slideUp();
    //$(this).closest('.content-block-container').find('.content-popup').slideDown();

    $("html, body").animate({
      scrollTop: $(this).closest('.content-block-container').find('.content-main').offset().top - topHeight - 60
    }, 1000);

    if ($(window).width() < 992) {
      $("html, body").animate({
        scrollTop: $(this).closest('.content-block-container').find('.content-main').offset().top - topHeight - 30
      }, 1000);
    }

    return false;
  });
  $('.expertise_section .content-block .close_btn').click(function () {
    $(this).closest('.content-block-container').find('.content-block').slideUp();
    $(this).closest('.content-block-container').find('.content-main').slideDown();
    return false;
  });
  /* form field animation */

  $(".form-group input, .form-group textarea").each(function () {
    if ($(this).val() != "") {
      $(this).closest('.form-group').addClass("active");
    }
  });
  $(".form-group input, .form-group textarea").focus(function () {
    if ($(this).val() == "") {
      $(this).closest('.form-group').addClass("active");
    }
  }).blur(function () {
    console.log('blurred');

    if ($(this).val() != "") {
      $(this).closest('.form-group').addClass("active");
    } else {
      $(this).closest('.form-group').removeClass("active");
    }
  });
  /* @end form field animation */

  /* form show hide*/

  $('.expertise_section .content-block .link-start').click(function () {
    $('.formContainer').removeClass('hidden');
    $('.thankyou_container').addClass('hidden');
    $('.formContainer input, .formContainer textarea').blur();
  });
});