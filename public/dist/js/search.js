$(document).ready(function () {
  /* Nav Animation */
  var target = document.querySelector(".target");
  var links = document.querySelectorAll(".mynav .nav-link");
  var colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

  for (var i = 0; i < links.length; i++) {
    // links[i].addEventListener("click", mouseenterFunc);
    if (document.readyState !== 'loading') {
      links[i].addEventListener("click", mouseenterFunc);
    } else {
      links[i].addEventListener("click", mouseenterFunc);
    }
  }

  function mouseenterFunc() {
    for (var _i = 0; _i < links.length; _i++) {
      if (links[_i].parentNode.classList.contains("active")) {
        links[_i].parentNode.classList.remove("active");
      }
    }

    this.parentNode.classList.add("active");
    var width = this.getBoundingClientRect().width;
    var height = this.getBoundingClientRect().height;
    var left = this.offsetLeft;
    var top = this.offsetTop;
    target.style.width = "".concat(width, "px");
    target.style.height = "".concat(height, "px");
    target.style.left = "".concat(left, "px");
    target.style.top = "".concat(top, "px");
    target.style.transform = "none";
  }

  setTimeout(function () {
    //   links[0].click();
    if (document.readyState !== 'loading') {
      links[0].click();
    } else {
      links[0].click();
    }
  }, 2000);
  /* Nav Animation End */

  $(function () {
    $('.mynav a').on("click", function (e) {
      e.preventDefault();
      var id = $(this).attr('data-link');
      console.log(id);
      $("div.search_content").each(function () {
        $(this).hide();

        if ($(this).attr('data-search') == id) {
          $(this).show();
        }
      });
    });
    $('.mynav a[data-link="all"]').on("click", function (e) {
      e.preventDefault();
      $("div.search_content").show();
    });
  });
});