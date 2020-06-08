$(document).ready(function(){
  
    $('.opportunity_slider').slick({
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
            dots: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.15,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });

    $('.icon-grid-listing li button').click(function(){
      $('.icon-grid-listing li button').removeClass('active').removeAttr('disabled');
      $(this).addClass('active').attr('disabled','disabled');
    });
 
    $('.success_stories nav .icon-grid-listing .icon-list').click(function(){
      $('.story_slider').removeClass('grid_view slick-slider');
      $('.story_slider').slick('unslick');
      $('.all_section.grid_view').addClass('all_list_view');
    })
 
     $('.success_stories nav .icon-grid-listing .icon-grid').click(function(){
      $('.all_section.grid_view').removeClass('all_list_view');
    })
    
    
    $('.success_stories nav .nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      dots: false,
      arrows: false,
      centerMode: false,
      infinite: false,
      
    });
    if ($(window).width() < 1024) {
      $('.success_stories nav .nav-tabs .nav-item').click(function(){
        var slideIndex = $(this).index();
        console.log(slideIndex);
        $('.success_stories nav .nav').slick('slickGoTo', slideIndex);
      });
  }
  else{
    $('.success_stories nav .nav').slick('unslick')
  }
 
 
 $('.success_stories nav .nav-tabs .nav-item .nav-link').click(function(){
 $('.success_stories nav .nav-tabs .nav-item .nav-link').removeClass('show active');
 //$(this).addClass('show active');
 })  
    
 if($(window).width() < 768){
 $('#latest_slider').slick({
      slidesToShow: 1.15,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
     infinite: false
    });
 }
 
    $('.story_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.15,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
      ]
    });
 
    $('.success_stories nav .icon-grid-listing .icon-grid').click(function(){
      $('.story_slider').addClass('grid_view slick-slider');
        $('.story_slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
      });
    })
 
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.story_slider').slick('setPosition');
      $('#latest_slider').slick('setPosition');
    });

    $('.award_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay:true,
      autoplaySpeed:3000,
  });

    $(function(){
      $(".prod_banner .showModal").click(function() {
        console.log("here");
        // e.preventDefault();
        console.log("here11");
  
        $('.video_modal').show();
        var videourl = $(this).attr("data-href");
        var videosrcauto = videourl + "?autoplay=1";
        $("#video_modal iframe").attr("src", videosrcauto);
      });
      $('.video_modal .modal-body .btn').click(function(){
        $('.video_modal').hide();
        $('.video_modal').find('iframe').attr('src','');
      });

      $(".prod_banner .video_icon").click(function(){
        $(".prod_banner .showModal").click();
      })

    });
  
  
 });


if( document.readyState !== 'loading' ) {
  yall({
      noPolyfill: true,
      observeChanges: true,
      events: {
          load: function (event) {
              if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
                  let e = event.target;
                  setTimeout(function(){
                      e.parentNode.classList.add("img-loaded");
                  },400);
                  setTimeout(function(){
                      e.classList.add("yall-loaded");
                      e.parentNode.classList.add("img-scale");
                  },600);
              }
          },
          error: {
              listener: function (event) {
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


}else{
document.addEventListener("DOMContentLoaded", function() {
  yall({
      noPolyfill: true,
      observeChanges: true,
      events: {
          load: function (event) {
              if (!event.target.classList.contains("lazy") && event.target.nodeName == "IMG") {
                  let e = event.target;
                  setTimeout(function(){
                      e.parentNode.classList.add("img-loaded");
                  },400);
                  setTimeout(function(){
                      e.classList.add("yall-loaded");
                      e.parentNode.classList.add("img-scale");
                  },600);
              }
          },
          error: {
              listener: function (event) {
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
