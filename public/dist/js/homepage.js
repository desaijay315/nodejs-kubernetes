var expertiseOffset;
var thinkingOffset;
$(document).ready(function () {
  $(".showModal").click(function (e) {
    e.preventDefault();
    $('.video_modal').show();
    var videourl = $(this).attr("data-href");
    var videosrcauto = videourl + "?autoplay=1";
    $("#video_modal iframe").attr("src", videosrcauto); //$("#video_modal").modal("show");
  }); //$(".desc_wrap .av_desc")

  $(".videoLink").click(function (e) {
    e.preventDefault();
    $('.video_modal').show();
    $(".videoLink").removeClass('active');
    $(this).addClass('active');
    var videourl = $(this).attr("data-href");
    $("#video_modal iframe").attr("src", videourl);
    $('.video_link').attr('data-href', videourl); //$("#video_modal").modal("show");

    var imgurl = $(this).attr('data-img-link');
    $('.video_wrapper img.videoImg').attr('data-src', imgurl).attr('src', imgurl);
    var datatext = $(this).attr('data-text-link');
    $(".desc_wrap .av_desc").each(function () {
      $(this).hide();

      if ($(this).attr('data-text') == datatext) {
        $(this).show();
      } //else
      //$(this).hide();

    });
    $('.showModal').click();
  }); //   $("#video_modal").on("shown.bs.modal", function() {
  //     $('.modal-backdrop').hide();
  //     $('body').removeClass('modal-open');
  //   });
  //   $("#video_modal").on("hidden.bs.modal", function() {
  //     $(this).find('iframe').attr('src','');
  //   });

  $('.video_modal .modal-body .btn').click(function () {
    $('.video_modal').hide();
    $('.video_modal').find('iframe').attr('src', '');
  });
  $('.award_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });
  $('.icon-grid-listing li button').click(function () {
    $('.icon-grid-listing li button').removeClass('active').removeAttr('disabled');
    $(this).addClass('active').attr('disabled', 'disabled');
  });
  $('.success_stories nav .icon-grid-listing .icon-list').click(function () {
    $('.story_slider').removeClass('grid_view slick-slider');
  });
  $('.success_stories nav .nav-tabs .nav-item .nav-link').click(function () {
    $('.success_stories nav .nav-tabs .nav-item .nav-link').removeClass('show active'); //$(this).addClass('show active');
  });
  $('.success_stories nav .icon-grid-listing .icon-grid').click(function () {
    $('.story_slider').addClass('grid_view slick-slider');
  });
  expertiseOffset = $('.expertise_digital').offset().top;
  thinkingOffset = $('.fwd_thinking_section').offset().top;
});
$(window).scroll(function () {
  if ($(document).scrollTop() >= expertiseOffset - 200) {
    $('.expertiseContain h4 svg').fadeIn();
  }

  if ($(document).scrollTop() >= $('.fwd_thinking_section').position().top - 200) {
    $('.img_overlay').height('0');
  }

  if ($(this).scrollTop() > 0) {
    $('.scroll').fadeOut();
  } else $('.scroll').fadeIn();
});

if (document.readyState !== 'loading') {
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

  /*function mouseenterFunc() {
  
    for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
            links[i].parentNode.classList.remove("active");
        }
        //links[i].style.opacity = "0.25";
    }
  
    this.parentNode.classList.add("active");
    //this.style.opacity = "1";
  
    var width = this.getBoundingClientRect().width;
    var height = this.getBoundingClientRect().height;
    var left = this.offsetLeft;
    var top = this.offsetTop;
    //var color = colors[Math.floor(Math.random() * colors.length)];
  
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
  
  if($('#scrollNav').length){
      scrollcontent();
  }
  else{
    target.style.left = `${left}px`;
  }
    target.style.top = `${top}px`;
    //target.style.borderColor = color;
    target.style.transform = "none";
  }*/


  function mouseenterFunc() {
    for (var _i = 0; _i < links.length; _i++) {
      if (links[_i].parentNode.classList.contains("active")) {
        links[_i].parentNode.classList.remove("active");
      } //links[i].style.opacity = "0.25";

    }

    this.parentNode.classList.add("active"); //this.style.opacity = "1";

    setActiveTarget(this);
  }

  function setActiveTarget(_this) {
    try {
      var width = _this.getBoundingClientRect().width;

      var height = _this.getBoundingClientRect().height;

      var left = _this.offsetLeft;
      var top = _this.offsetTop; //var color = colors[Math.floor(Math.random() * colors.length)];

      target.style.width = "".concat(width, "px");
      target.style.height = "".concat(height, "px");

      if ($('#scrollNav').length) {
        scrollcontent();
      } else {
        target.style.left = "".concat(left, "px");
      }

      target.style.top = "".concat(top, "px"); //target.style.borderColor = color;

      target.style.transform = "none";
    } catch (e) {
      console.log(e);
    }
  }

  $(function () {
    if ($(window).width() < 992) {
      generateGrid();
    } else {
      generateList();
    }

    $('#carouselNav li a').click(function (e) {
      if ($('.listNav').length) {
        e.preventDefault();
        var selCat = $(this).attr('href').replace('#', '');
        showStories(selCat);
      }
    });
  });

  function showStories(cat) {
    $('.success_stories .slide-item').addClass('hide');
    $('.success_stories .slide-item').each(function () {
      if ($(this).data('cat') === cat) {
        $(this).removeClass('hide');
      }
    });
  }

  function generateList() {
    try {
      $('#successCarousel').owlCarousel('destroy');
      $('#successCarousel').addClass('list');
      $('#successCarousel').addClass('tab-content');
      $('#successCarousel').removeClass('grid_view');
      $('#carouselNav').addClass('listNav');
      var selCat = $('#carouselNav li.active a').attr('href').replace('#', '');
      showStories(selCat);
    } catch (e) {
      console.log(e);
    }
  }

  function generateGrid() {
    try {
      $('#successCarousel').removeClass('list');
      $('#carouselNav').removeClass('listNav');
      $('#successCarousel').removeClass('tab-content');
      $('#successCarousel').addClass('grid_view');
      $('.slide-item').removeClass('hide');
      var owl = $('#successCarousel');
      owl.owlCarousel({
        items: 4,
        loop: true,
        center: false,
        rewind: false,
        //margin:10,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        nav: false,
        autoplay: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1.15,
            nav: true
          },
          768: {
            items: 2.25
          },
          1024: {
            items: 3
          },
          1280: {
            items: 4
          }
        }
      });
      owl.on('changed.owl.carousel', function (e) {
        /*var current = $('#successCarousel .owl-item.active').index();
        var src = owl.find(".owl-item").eq(current).find("slide-item").data('hash');
        console.log('Image current is ' + src, current);*/
        owl.trigger('stop.owl.autoplay');
        setTimeout(function () {
          //   console.log("here", links);
          var dataHash = $('#successCarousel .owl-item.active').children().data('hash'); //   console.log($('#carouselNav').find('.' + dataHash).index());

          if (typeof dataHash !== "undefined") {
            //$('#carouselNav').find('.' + dataHash).addClass('active').siblings().removeClass('active');
            links[$('#carouselNav').find('.' + dataHash).index()].click();
            $('#scrollNav').animate({
              scrollLeft: Math.round($('#scrollNav li.active').offset().left - 15)
            }, 100);
          }
        }, 500);
      });
    } catch (e) {
      console.log(e);
    }
  }

  $('.success_stories .nav_wrap .icon-grid-listing .icon-grid').click(function () {
    generateGrid();
  });

  if (document.readyState !== 'loading') {
    // console.log(links);
    // links[0].click();
    setTimeout(function () {
      setActiveTarget(document.querySelector('#carouselNav li.active'));
    }, 200);
  } else {
    // links[0].click();
    // console.log(links);
    setTimeout(function () {
      setActiveTarget(document.querySelector('#carouselNav li.active'));
    }, 200);
  }
});
$(function () {
  // video thumbnails
  $('.vid_thumbcarousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 2.25
      },
      600: {
        items: 3
      },
      1000: {
        items: 6,
        nav: false
      }
    }
  });
}); // $(document).ready(function(){
// console.log(links);
// });