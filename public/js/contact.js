// image loading
if( document.readyState !== 'loading' ) {
    console.log("in side the if")
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


   $(document).ready(function(){
//    document.getElementById("uploadBtn").onchange = function () {
//        document.getElementById("attach").value = this.value.replace("C:\\fakepath\\", "");
//    };
//    $(function(){
//       $('.formContact form .btn').click(function(){
//        $('.formContact form').slideUp();
//        $('.thankyou_container').slideDown();
//        return false;
//       })
//    })
//formContact
$('.form-group .btn').click(function(){
    $('html, body').animate({
        scrollTop: $(".formContact").offset().top
    }, 800);
})
/* form field animation */
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

});