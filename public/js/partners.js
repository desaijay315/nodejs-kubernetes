$(document).ready(function(){
$('body').scrollTop(0);  
$(".scroll_tabs_section").sticky({
  topSpacing: 63,
  zIndex: '50'
});
if(window.innerWidth < 992){
$(".scroll_tabs_section").sticky({
   topSpacing: 49,
   zIndex: '50'
});
}
var headerHeight = $('header').height();
var tabsHeight = $('.partner_row').height();
var topHeight = headerHeight + tabsHeight;
$('.scroll-tabs li a').bind('click', function(e) {
e.preventDefault(); 
var self = $(this);
var scrollArea = $('.scroll-tabs');
var leftOffset = self.offset().left - scrollArea.offset().left + scrollArea.scrollLeft();
var target = $(this).attr("href"); 
scrollArea.animate({ scrollLeft: leftOffset });
$('.scroll-tabs li a.active').removeClass('active');
self.addClass('active');


if(!$('#sticky-wrapper').hasClass('is-sticky')){
  console.log('not sticky');
  $('html, body').stop().animate({
    scrollTop: $(target).offset().top - 300
}, 600, function() {
   // location.hash = target; //attach the hash (#jumptarget) to the pageurl
});
}

else{
  $('html, body').stop().animate({
    scrollTop: $(target).offset().top - 160
}, 600, function() {
   // location.hash = target; //attach the hash (#jumptarget) to the pageurl
});
}

return false;
});


$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  $('.partner_row').each(function(i) {
     if ($(this).position().top <= scrollDistance) {
         $('.partner_row').removeClass('active');
         $(this).addClass('active');
         $('.scroll-tabs li a.active').removeClass('active');
         $('.scroll-tabs li a').eq(i).addClass('active');
     }
  });
  }).scroll();

});
