$(document).ready(function(){    
    
    $('.all_articles .nav-tabs').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      dots: false,
      arrows: false,
      centerMode: false,
      infinite: false,
      
    });
    if ($(window).width() < 1024) {
      $('.all_articles .nav-tabs .nav-item').click(function(){
        var slideIndex = $(this).index();
        console.log(slideIndex);
        $('.all_articles .nav-tabs').slick('slickGoTo', slideIndex);
      });
  }
  else{
    $('.all_articles .nav-tabs').slick('unslick')
  }
    
 });