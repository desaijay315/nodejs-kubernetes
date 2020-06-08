function frame1ImgUpdate(index){
  try{
    var prevImgSrc = index-2 === 0 ? $('#profileImg img').eq($('#profileImg img').length-1).attr('src') : $('#profileImg img').eq(index-3).attr('src');
    var currImgSrc = $('#profileImg img').eq(index-2).attr('src');
    var nextImgSrc = $('#profileImg img').length - 1 === index-1 ? $('#profileImg img').eq(0).attr('src') : $('#profileImg img').eq(index-1).attr('src');
    $('#frame1 img').eq(0).attr('src', prevImgSrc);
    $('#frame1 img').eq(1).attr('src', currImgSrc);
    $('#frame1 img').eq(2).attr('src', nextImgSrc);
  }catch (e) {
    console.log(e)
  }
}
function frame2ImgUpdate(index){
  try{
    var prevImgSrc = index-1 === 0 ? $('#profileImg img').eq($('#profileImg img').length-1).attr('src') : $('#profileImg img').eq(index-2).attr('src');
    var currImgSrc = $('#profileImg img').eq(index-1).attr('src');
    var nextImgSrc = $('#profileImg img').length === index ? $('#profileImg img').eq(0).attr('src') : $('#profileImg img').eq(index).attr('src');
    $('#frame2 img').eq(0).attr('src', prevImgSrc);
    $('#frame2 img').eq(1).attr('src', currImgSrc);
    $('#frame2 img').eq(2).attr('src', nextImgSrc);
  }catch (e) {
    console.log(e)
  }
}
function frame3ImgUpdate(index){
  try{
    var prevImgSrc = index === 0 ? $('#profileImg img').eq($('#profileImg img').length-1).attr('src') : $('#profileImg img').eq(index-1).attr('src');
    var currImgSrc = $('#profileImg img').eq(index).attr('src');
    var nextImgSrc = $('#profileImg img').length - 1 === index ? $('#profileImg img').eq(0).attr('src') : $('#profileImg img').eq(index+1).attr('src');
    $('#frame3 img').eq(0).attr('src', prevImgSrc);
    $('#frame3 img').eq(1).attr('src', currImgSrc);
    $('#frame3 img').eq(2).attr('src', nextImgSrc);
  }catch (e) {
    console.log(e)
  }
}

function addImgtoFrame(){
  try{
    $('#frame1 figure').prepend('<img src="" alt />');
    $('#frame1 figure').append('<img src="" alt />');
    $('#frame2 figure').prepend('<img src="" alt />');
    $('#frame2 figure').append('<img src="" alt />');
    $('#frame3 figure').prepend('<img src="" alt />');
    $('#frame3 figure').append('<img src="" alt />');
  }catch (e) {
    console.log(e)
  }
}

$(document).ready(function(){

  addImgtoFrame();
  setTimeout(function () {
    $('.testimonial').each(function(){
      if($(this).hasClass('bigFrame')){
        $(this).find('figure').css({'width': ($(this).width() + 18) * 3});
      }else {
        $(this).find('figure').css({'width': ($(this).width() + 15) * 3});
      }
    });

    var defaultIndex = 2;
    frame1ImgUpdate(defaultIndex);
    frame2ImgUpdate(defaultIndex);
    frame3ImgUpdate(defaultIndex);


    $('.slick-next').click(function(){
      var activeIndex = $('.disruptors_text_slider .slick-active').index();
      var activeSlideName = $('.disruptors_text_slider .slick-slide').eq(($('.disruptors_text_slider .slick-slide').length - 1) - activeIndex).find('h3').text();
      $('.testimonial').addClass('next');

      $('#profileImg img').each(function () {
        if($(this).data('name') === activeSlideName){
          var _this = $(this);

          setTimeout(function(){
            $('.testimonial').addClass('hold');

            var imgIndex = _this.index();

            frame1ImgUpdate(imgIndex);

            frame2ImgUpdate(imgIndex);

            frame3ImgUpdate(imgIndex);

            $('.testimonial').removeClass('next');
            setTimeout(function(){
              $('.testimonial').removeClass('hold');
            },600);
          },500);
        }
      })
    });

    $('.slick-prev').click(function(){
      var activeIndex = $('.disruptors_text_slider .slick-active').index();
      var activeSlideName = $('.disruptors_text_slider .slick-slide').eq(($('.disruptors_text_slider .slick-slide').length - 1) - activeIndex).find('h3').text();
      $('.testimonial').addClass('prev');

      $('#profileImg img').each(function () {
        if($(this).data('name') === activeSlideName){
          var _this = $(this);

          setTimeout(function(){
            $('.testimonial').addClass('hold');

            var imgIndex = _this.index();

            frame1ImgUpdate(imgIndex);

            frame2ImgUpdate(imgIndex);

            frame3ImgUpdate(imgIndex);

            $('.testimonial').removeClass('prev');
            setTimeout(function(){
              $('.testimonial').removeClass('hold');
            },600);
          },500);
        }
      })
    });

  },500);


  /*$('.disruptors_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dots: false,
    arrows: false,
   centerMode: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3500,
    // focusOnSelect: true,
    asNavFor: '.disruptors_text_slider',
  });*/

  $('.disruptors_text_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    dots: false,
    arrows: true,
    initialSlide: $('#profileImg img').length - 4,
    draggable:false,
    //asNavFor: '.disruptors_slider',
  });
  /*
  $('.disruptors_slider .slide-item.slick-current.slick-active.slick-center').each(function(){
    $(this).addClass('zindex2').removeClass('zindex1 zindex3');
    $(this).next().addClass('zindex1').removeClass('zindex2 zindex3');
    $(this).prev().addClass('zindex3').removeClass('zindex1 zindex2');
  });

  $('.disruptors_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.disruptors_slider .slide-item.slick-current.slick-active.slick-center').each(function(){
    $(this).addClass('zindex2').removeClass('zindex1 zindex3');
    $(this).next().addClass('zindex1').removeClass('zindex2 zindex3');
    $(this).prev().addClass('zindex3').removeClass('zindex1 zindex2');
  })
  });*/



  $('.slider_livelife').slick({
    variableWidth: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });


  if ($(window).width() < 1024) {
    $('.all_articles .nav-tabs .nav-item').click(function(){
      var slideIndex = $(this).index();
      console.log(slideIndex);
      $('.all_articles .nav-tabs').slick('slickGoTo', slideIndex);
    });

    var header_html = $('#culture_slider .slider-item:nth-child(2)').html();
    console.log(header_html);
    $('#culture_section_header').html(header_html);

    $('#culture_slider .slider-item:nth-child(2)').hide();
    $('#culture_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: false,
  });


}
else{
  $('.all_articles .nav-tabs').slick('unslick')
}


$('.success_stories nav .nav-tabs .nav-item .nav-link').click(function(){
$('.success_stories nav .nav-tabs .nav-item .nav-link').removeClass('show active');
//$(this).addClass('show active');
})

$(".career_modal").on('show.bs.modal', function(){
  $('body').addClass('modal_open');
});
$(".career_modal").on('hidden.bs.modal', function(){
  $('body').removeClass('modal_open');
});

$("#career_form").on('show.bs.modal', function(){
  $('body').addClass('form_modal_open');
});
$("#career_form").on('hidden.bs.modal', function(){
  $('body').removeClass('form_modal_open');
});

$('.career_page .intro_section .btn-load').click(function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $("#openings").offset().top - 70
  }, 1000);
})

// document.getElementById("uploadBtn").onchange = function () {
//     document.getElementById("c_resume").value = this.value.replace("C:\\fakepath\\", "");
// };

// document.getElementById("uploadBtn_portfolio").onchange = function () {
//     document.getElementById("c_portfolio").value = this.value.replace("C:\\fakepath\\", "");
// };


////////// anchor linking /////////////
$(".scroll_tabs_section").sticky({
  topSpacing: 73,
  zIndex: '50'
});
if(window.innerWidth < 992){
$(".scroll_tabs_section").sticky({
   topSpacing: 49,
   zIndex: '50'
});
}
var headerHeight = $('header').height();
var tabsHeight = $('.scroll_tabs_section').height();
var topHeight = headerHeight + tabsHeight;
$('.scroll-tabs li a').bind('click', function(e) {
e.preventDefault();
var self = $(this);
var scrollArea = $('.scroll-tabs');
var leftOffset = self.offset().left - scrollArea.offset().left + scrollArea.scrollLeft() - 40;
var target = $(this).attr("href");
scrollArea.animate({ scrollLeft: leftOffset });
$('.scroll-tabs li a.active').removeClass('active');
self.addClass('active');
$('html, body').stop().animate({
       scrollTop: $(target).offset().top - topHeight
}, 600, function() {
       //location.hash = target; //attach the hash (#jumptarget) to the pageurl
});
return false;
});

$(window).scroll(function() {
var scrollDistance = $(window).scrollTop() + topHeight + 30;
$('.page_section').each(function(i) {
   if ($(this).position().top <= scrollDistance) {
       $('.page_section').removeClass('active');
       $(this).addClass('active');
       $('.scroll-tabs li a.active').removeClass('active');
       $('.scroll-tabs li a').eq(i).addClass('active');
   }
});

//////// added n 12/05 /////////////
if ($(this).scrollTop()>0){
  $('.scroll').fadeOut();
}
else
  $('.scroll').fadeIn();

}).scroll();

/* apply filters */
// $("#applied_post").change(function(){
//   $(this).find("option:selected").each(function(){
//       var optionValue = $(this).attr("value");
//       //console.log(optionValue);
//       if(optionValue){
//           $(".joblist_row .col-md-6").not("." + optionValue).hide();
//           $("." + optionValue).show();
//       } else{
//           $(".joblist_row .col-md-6").hide();
//       }
//   });
// }).change();

// $("#applied_city").change(function(){
//   $(this).find("option:selected").each(function(){
//       var optionValue = $(this).attr("value");
//       //console.log(optionValue);
//       if(optionValue){
//           $(".joblist_row .col-md-6").not("." + optionValue).hide();
//           $("." + optionValue).show();
//       } else{
//           $(".joblist_row .col-md-6").hide();
//       }
//   });
// }).change();

$('#applied_post').change(function(){
  let applied_post = $(this).val();
  let location = $('#applied_city option:selected').val();
  careersFilter(applied_post, location);
})
$('#applied_city').change(function(){
  let applied_post = $('#applied_post option:selected').val();
  let location = $(this).val();
  careersFilter(applied_post, location);
})

function careersFilter(cat, loc){
  
  try{
      $('#careersfilter .careersDetails').removeClass('hide');
      $('#careersfilter .careersDetails').each(function(){
          let locationFilter = $(this).data('location');          
          let catFilter = $(this).data('cat');
          if(loc === "all" && cat === "all"){
              return false;
          }

          if(loc !== "all" && cat !== "all"){
            if(locationFilter.indexOf(loc) === -1 || catFilter.indexOf(cat) === -1){
                $(this).addClass('hide');
            }else{
              $(this).addClass('show');
            }
          }

          if(loc !== "all" && cat === "all"){
              if(locationFilter.indexOf(loc) === -1){
                  $(this).addClass('hide');
              }
          }

          if(loc === "all" && cat !== "all"){
              console.log(cat);
              console.log(catFilter.indexOf(cat));
              if(catFilter.indexOf(cat) === -1){
                  $(this).addClass('hide');
              }
          }

      });
  }catch (e) {
      console.log(e)
  }
}

// var $selectedItems = $('#applied_post, #applied_city').on('change', function(){
//   console.log(this.selectedIndex);
//   $selectedItems.not(this).prop('selectedIndex', this.selectedIndex);
// })

// $('#')

$('.job_card .btn-wrap .btn:last-child').click(function(){
  var post_applied = $(this).closest('div.job_card').find('h4').text();
  //console.log(post_applied);
  $('#c_applyfor').focus().val(post_applied);
  localStorage.removeItem('post_applied');
  localStorage.setItem('post_applied', JSON.stringify(post_applied));
});


/* form field animation */
$('#c_applyfor').closest('.form-group').addClass('active');
$(".form-group input, .form-group textarea").each(function(){
  if($(this).val() != ""){
    $(this).closest('.form-group').addClass("active");
  }
})
$(".form-group input, .form-group textarea").focus(function(){
  if($(this).val() == ""){
      $(this).closest('.form-group').addClass("active");
  }
}).blur(function(){
  console.log('blurred');
  if($(this).val() != ""){
      $(this).closest('.form-group').addClass("active");
  }
  else{
      $(this).closest('.form-group').removeClass("active");
  }
})
/* @end form field animation */

/* form show hide */
$('[data-target="#career_form"]').click(function(){
  $('form.careerapplypost').removeClass('hidden');
  $('.thankyou_container').addClass('hidden');
  $('form.careerapplypost input, form.careerapplypost textarea').blur();
});


});