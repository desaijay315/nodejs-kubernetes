//let links;
window.onload = function () {
  // setTimeout(function () {
  //     links[0].click();
  // }, 200)
  if ($(window).width() < 992) {
    $('.all_section.grid_view').removeClass('all_list_view');
    $('#latest_slider').slick({
      slidesToShow: 1.15,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinite: false
    });
  } else {
    $('.story_slider').removeClass('grid_view slick-slider');
    console.log("heree");
    $('.story_slider').slick('unslick');
    $('.all_section.grid_view').addClass('all_list_view');
  }
};

var target = document.querySelector(".target");
var links = document.querySelectorAll(".mynav a");
var scrollnav_id = document.getElementById('scrollNav');

function scrollcontent() {
  var offsetLeft = Math.round($('#scrollNav li.active').offset().left - $('#scrollNav').offset().left);

  if (offsetLeft < 0 && offsetLeft > window.innerWidth) {
    var scrollLeft = scrollnav_id.scrollLeft;
    $('.target').css({
      'left': offsetLeft - scrollLeft
    });
  } else {
    $('.target').css({
      'left': offsetLeft
    });
  }
}

$(document).ready(function () {
  /* Nav Animation */
  $('#scrollNav').scroll(function (e) {
    scrollcontent();
  });
  var target = document.querySelector(".target");
  var links = document.querySelectorAll(".mynav a");
  var colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];
  /*for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => e.preventDefault());
  links[i].addEventListener("mouseenter", mouseenterFunc);
  }*/

  for (var i = 0; i < links.length; i++) {
    if (document.readyState !== 'loading') {
      links[i].addEventListener("click", mouseenterFunc);
    } else {
      links[i].addEventListener("click", mouseenterFunc);
    }
  } //links[i].addEventListener("mouseenter", mouseenterFunc);


  function mouseenterFunc() {
    for (var _i = 0; _i < links.length; _i++) {
      if (links[_i].parentNode.classList.contains("active")) {
        links[_i].parentNode.classList.remove("active");
      } //links[i].style.opacity = "0.25";

    }

    this.parentNode.classList.add("active"); //this.style.opacity = "1";

    var width = this.getBoundingClientRect().width;
    var height = this.getBoundingClientRect().height;
    var left = this.offsetLeft;
    var top = this.offsetTop; //var color = colors[Math.floor(Math.random() * colors.length)];

    target.style.width = "".concat(width, "px");
    target.style.height = "".concat(height, "px");

    if ($('#scrollNav').length) {
      scrollcontent();
    } else {
      target.style.left = "".concat(left, "px");
    }

    target.style.top = "".concat(top, "px"); //target.style.borderColor = color;

    target.style.transform = "none";
  }
  /* Nav Animation End */


  if (window.location.href.indexOf('?section=') > -1) {
    var navurl = window.location.href.split('?section=');
    var selectedTab = navurl.pop() || navurl.pop(); // handle potential trailing slash

    console.log(selectedTab);
    $('nav a[href="#nav-' + selectedTab + '"]').trigger('click');
  } else if (document.readyState !== 'loading') {
    console.log(links);
    links[0].click();
  } else {
    links[0].click();
    console.log(links);
  }

  $('.success_stories .nav_wrap').sticky({
    topSpacing: 73,
    zIndex: '50'
  });

  if ($(window).width() < 992) {
    $('.success_stories .nav_wrap').sticky({
      topSpacing: 50,
      zIndex: '50'
    });
  }

  $('.icon-grid-listing li button').click(function () {
    $('.icon-grid-listing li button').removeClass('active').removeAttr('disabled');
    $(this).addClass('active').attr('disabled', 'disabled');
  });
  $('.success_stories nav .icon-grid-listing .icon-list').click(function () {
    $('.story_slider').removeClass('grid_view slick-slider');
    console.log("heree");
    $('.story_slider').slick('unslick');
    $('.all_section.grid_view').addClass('all_list_view');
  });
  $('.success_stories nav .icon-grid-listing .icon-grid').click(function () {
    $('.all_section.grid_view').removeClass('all_list_view');
  }); //   $('.success_stories nav .nav').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     variableWidth: true,
  //     dots: false,
  //     arrows: false,
  //     centerMode: false,
  //     infinite: false,
  //   });
  //   if ($(window).width() < 1024) {
  //     $('.success_stories nav .nav-tabs .nav-item').click(function(){
  //       var slideIndex = $(this).index();
  //       console.log(slideIndex);
  //       $('.success_stories nav .nav').slick('slickGoTo', slideIndex);
  //     });
  // }
  // else{
  //   $('.success_stories nav .nav').slick('unslick')
  // }
  // $('.success_stories nav .nav-tabs .nav-item .nav-link').click(function(){
  // $('.success_stories nav .nav-tabs .nav-item .nav-link').removeClass('show active');
  //$(this).addClass('show active');
  //})
  // if($(window).width() < 768){
  // $('#latest_slider').slick({
  //     slidesToShow: 1.15,
  //     slidesToScroll: 1,
  //     dots: true,
  //     arrows: false,
  //    infinite: false
  //   });
  // }

  $('.story_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.15,
        slidesToScroll: 1,
        centerMode: false
      }
    }]
  });
  $('.success_stories nav .icon-grid-listing .icon-grid').click(function () {
    $('.story_slider').addClass('grid_view slick-slider');
    $('.story_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    });
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.story_slider').slick('setPosition');
  });

  if ($('.expertise_digital').length) {
    expertiseOffset = $('.expertise_digital').offset().top;
  }
});

if (document.readyState !== 'loading') {
  console.log("in side the if");
  yall({
    noPolyfill: true,
    observeChanges: true,
    events: {
      load: function load(event) {
        if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
          var e = event.target;
          setTimeout(function () {
            e.parentNode.classList.add("img-loaded");
          }, 400);
          setTimeout(function () {
            e.classList.add("yall-loaded");
            e.parentNode.classList.add("img-scale");
          }, 600);
        }
      },
      error: {
        listener: function listener(event) {
          if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
            event.target.classList.add("yall-error");
            event.target.nextElementSibling.classList.add("visible");
          }
        },
        options: {
          once: true
        }
      }
    }
  });
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("in side the else");
    yall({
      noPolyfill: true,
      observeChanges: true,
      events: {
        load: function load(event) {
          if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
            var e = event.target;
            setTimeout(function () {
              e.parentNode.classList.add("img-loaded");
            }, 400);
            setTimeout(function () {
              e.classList.add("yall-loaded");
              e.parentNode.classList.add("img-scale");
            }, 600);
          }
        },
        error: {
          listener: function listener(event) {
            if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
              event.target.classList.add("yall-error");
              event.target.nextElementSibling.classList.add("visible");
            }
          },
          options: {
            once: true
          }
        }
      }
    });
  });
}