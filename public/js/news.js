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

var target = document.querySelector(".target");
var links = document.querySelectorAll(".mynav a");
var scrollnav_id = document.getElementById('scrollNav')

function scrollcontent(){
    let offsetLeft = Math.round($('#scrollNav li.active').offset().left - $('#scrollNav').offset().left);
    if(offsetLeft < 0 && offsetLeft > window.innerWidth){
    let scrollLeft = scrollnav_id.scrollLeft;
    $('.target').css({'left':offsetLeft-scrollLeft})
    }else{
        $('.target').css({'left':offsetLeft})
    }
}


$(document).ready(function(){
/* Nav Animation */
$('#scrollNav').scroll(function(e){
    scrollcontent();
});

const target = document.querySelector(".target");
const links = document.querySelectorAll(".mynav .nav-link");
const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

for (let i = 0; i < links.length; i++) {
    if( document.readyState !== 'loading' ) {
        links[i].addEventListener("click", mouseenterFunc);
    }else{
        links[i].addEventListener("click", mouseenterFunc);
    }
}
function mouseenterFunc() {
   for (let i = 0; i < links.length; i++) {
      if (links[i].parentNode.classList.contains("active")) {
         links[i].parentNode.classList.remove("active");
      }
   }
   this.parentNode.classList.add("active");

   const width = this.getBoundingClientRect().width;
   const height = this.getBoundingClientRect().height;
   const left = this.offsetLeft;
   const top = this.offsetTop;
   //const color = colors[Math.floor(Math.random() * colors.length)];

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
}
setTimeout(function(){ 
    if(document.readyState !== 'loading'){
        links[0].click();
    }else{
        links[0].click();
    }
}, 2000);
/* Nav Animation End */
 
});