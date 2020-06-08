$(document).ready(function(){

   /* Nav Animation */
   const target = document.querySelector(".target");
   const links = document.querySelectorAll(".mynav .nav-link");
   const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];
   for (let i = 0; i < links.length; i++) {
      // links[i].addEventListener("click", mouseenterFunc);
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

      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
      target.style.transform = "none";
   }
   setTimeout(function(){ 
   //   links[0].click();
      if(document.readyState !== 'loading'){
         links[0].click();
      }else{
         links[0].click();
      }
   }, 2000);
   /* Nav Animation End */

   $(function(){
   $('.mynav a').on( "click", function(e) {
   e.preventDefault();
   var id = $(this).attr('data-link'); 
   console.log(id);
   $("div.search_content").each(function(){
         $(this).hide();
         if($(this).attr('data-search') == id) {
            $(this).show();
         }
   });
   });
   $('.mynav a[data-link="all"]').on( "click", function(e) {
   e.preventDefault();
   $("div.search_content").show();
   })
   });
});