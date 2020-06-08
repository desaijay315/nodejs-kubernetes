var target = document.querySelector(".scroll_tabs_section .target2");
var target2 = document.querySelector(".our_association .target");
var links = document.querySelectorAll(".scroll_tabs_section .mynav a");
var links_partners = document.querySelectorAll(".our_association .mynav a");
var scrollnav_id = document.getElementById('scrollNav')

function scrollcontent(){
    let offsetLeft = Math.round($('#scrollNav li.active').offset().left - $('#scrollNav').offset().left);
    if(offsetLeft < 0 && offsetLeft > window.innerWidth){
    let scrollLeft = scrollnav_id.scrollLeft;
    $('.our_association .target').css({'left':offsetLeft-scrollLeft})
    }else{
        $('.our_association .target').css({'left':offsetLeft})
    }
}

$(document).ready(function(){
/* Nav Animation */
$('#scrollNav').scroll(function(e){
    scrollcontent();
});
var target2 = document.querySelector(".our_association .target");
var links_partners = document.querySelectorAll(".our_association .mynav a");
for (let i = 0; i < links.length; i++) {
    if( document.readyState !== 'loading' ) {
        links[i].addEventListener("click", mouseenterFunc);
    }else{
        links[i].addEventListener("click", mouseenterFunc);
    }
   
}
for (let i = 0; i < links_partners.length; i++) {
    if( document.readyState !== 'loading' ) {
        links_partners[i].addEventListener("click", mouseenterFunc2);
    }else{
        links_partners[i].addEventListener("click", mouseenterFunc2);
    }
}
function mouseenterFunc() {
   for (let i = 0; i < links.length; i++) {
      if (links[i].parentNode.classList.contains("active")) {
         links[i].parentNode.classList.remove("active");
      }
   }

   this.parentNode.classList.add("active");
   var width = this.getBoundingClientRect().width;
   var height = this.getBoundingClientRect().height;
   var left = this.offsetLeft;
   var top = this.offsetTop;
   //var color = colors[Math.floor(Math.random() * colors.length)];

   target.style.width = `${width}px`;
   target.style.height = `${height}px`;
   target.style.left = `${left}px`;
   target.style.top = `${top}px`;
   //target.style.borderColor = color;
   target.style.transform = "none";
}
function mouseenterFunc2() {
  for (let i = 0; i < links_partners.length; i++) {
     if (links_partners[i].parentNode.classList.contains("active")) {
      links_partners[i].parentNode.classList.remove("active");
     }
     //links[i].style.opacity = "0.25";
  }

  this.parentNode.classList.add("active");
  //this.style.opacity = "1";

  var width2 = this.getBoundingClientRect().width;
  var height2 = this.getBoundingClientRect().height;
  var left2 = this.offsetLeft;
  var top2 = this.offsetTop;
  //var color = colors[Math.floor(Math.random() * colors.length)];

  target2.style.width = `${width2}px`;
  target2.style.height = `${height2}px`;
  if($('#scrollNav').length){
    scrollcontent();
}
else{
  target2.style.left = `${left2}px`;
}
  target2.style.top = `${top2}px`;
  //target.style.borderColor = color;
  target2.style.transform = "none";
}
//links[0].click();

if(document.readyState !== 'loading') {
    console.log(links_partners);
    links_partners[0].click();
}else{
    links_partners[0].click();
}

setTimeout(function(){
    links_partners[0].click();
},2000);
/* Nav Animation End */


 $('.scroll-tabs li a').click(function(){
     $('html, body').animate({
         scrollTop: $( $(this).attr('href') ).offset().top - 40
     }, 1000);
     return false;
     document.getElementsByClassName('scroll-tabs').scrollLeft += 20;
 });

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

$(window).scroll(function(e) {
var scrollDistance = $(window).scrollTop() + topHeight + 30;
$('.onscroll_section').each(function(i) {
   if ($(this).position().top <= scrollDistance) {
       $('.onscroll_section').removeClass('active');
       $(this).addClass('active');
       $('.scroll-tabs li a').removeClass('active');
       $('.scroll-tabs li a').eq(i).addClass('active');
       
       

   }

});

//////// added n 12/05 /////////////
if ($(this).scrollTop()>0){
  $('.scroll').fadeOut();
}
else
  $('.scroll').fadeIn();

}); 

var hashtarget = window.location.hash;
var offset = topHeight; // You can change this value as per your need.
if ($(hashtarget).length > 0) {
$('html, body').animate({
   scrollTop: $(hashtarget).offset().top - offset
}, 1000);
} else {
}
 
 $('.leaders_list').slick({
     arrows: false,
     slidesToShow: 6,
     slidesToScroll: 1,
     dots: false,
     infinite: false,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 4.15,
           slidesToScroll: 1,
           dots: true,
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 3.15,
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

   $('.accolades_slider').slick({
     variableWidth: false,
     arrows: false,
     slidesToShow: 4,
     slidesToScroll: 1,
     dots: false,
     infinite: false,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
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
   
//    $('.our_association .tab-content .nav-tabs').slick({
//      slidesToShow: 1,
//      slidesToScroll: 1,
//      variableWidth: true,
//      dots: false,
//      arrows: false,
//      centerMode: false,
//      infinite: false,
     
//    });
   
//    if ($(window).width() < 1024) {
//      $('.our_association .tab-content .nav-tabs .nav-item').click(function(){
//        var slideIndex = $(this).index();
//        console.log(slideIndex);
//        $('.our_association .tab-content .nav-tabs').slick('slickGoTo', slideIndex);
//      });
//  }
//  else{
//    $('.our_association .tab-content .nav-tabs').slick('unslick')
//  }


// $('.our_association .tab-content .nav-tabs .nav-link').click(function(){
//  $('.our_association .tab-content .nav-tabs .nav-link').removeClass('show active');
//$(this).addClass('show active');
//})  

var a = 0;
$(window).scroll(function() {
  var oTop = $('.fact_row').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    a = 1;
  }

});
   
});


// image loading

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