
         $(document).ready(function(){
            var expertiseOffset;
            var thinkingOffset;

           $(".showModal").click(function(e) {
              e.preventDefault();
              var videourl = $(this).attr("data-href");
              var videosrcauto = videourl + "?autoplay=1";
              $("#video_modal iframe").attr("src", videosrcauto);
              //$("#myModal").modal("show");

            });

            $("#video_modal").on("shown.bs.modal", function() {
              $('.modal-backdrop').hide();
              $('body').removeClass('modal-open');
            });

            $("#video_modal").on("hidden.bs.modal", function() {
              $(this).find('iframe').attr('src','');
            });

            

            

            var thinkingOffset = $('.fwd_thinking_section').offset().top;

            // tab underline start
            var activePos = $('nav .nav-tabs li a.active').position();

            function changePos() {
            activePos = $('nav .nav-tabs li a.active').position();

            $('.tabUnderline').stop().css({
               left: activePos.left,
               width: $('nav .nav-tabs li a.active').outerWidth()
            });
            }

            changePos();
            // Tabs click
            $('.as').on('click', function (e) {
               e.preventDefault();

               // Tab Id
               var tabId = $(this).attr('tab-id');

               // Remove Active State
               $('.tabs-header a').stop().parent().removeClass('active');

               // Add Active State
               $(this).stop().parent().addClass('active');

               changePos();

               // Update Current Itm
               tabCurrentItem = tabItems.filter('.active');

               // Remove Active State
               $('.tab').stop().fadeOut(300, function () {
                  // Remove Class
                  $(this).removeClass('active');
               }).hide();

               // Add Active State
               $('.tab[tab-id="' + tabId + '"]').stop().fadeIn(300, function () {
                  // Add Class
                  $(this).addClass('active');

                  // Animate Height
                  animateTabHeight();
               });
            });
        

         $(window).scroll(function () {
            var expertiseOffset = $('.expertise_digital').offset().top;
            if ($(document).scrollTop() >= expertiseOffset -200) {
               $('.expertiseContain h4 svg').fadeIn()
            }

            /*if ($(document).scrollTop() >= thinkingOffset -400) {
               $('.fwd_thinking_section .video_wrapper img').addClass('slideup');
            }*/

            if($(document).scrollTop()>=$('.fwd_thinking_section').position().top - 200){
              $('.img_overlay').height('0');
            }

         });
 });



if( document.readyState !== 'loading' ) {
    console.log("in side the if")

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
        console.log("in side the else")
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
 