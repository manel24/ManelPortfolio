$(document).ready(function() {
  /* smooth scrolling within the page */
  $(".js--scroll-to-top").click(function() {
    $("html,body").animate(
      {
        scrollTop: $(".top-container").offset().top
      },
      1000
    );
  });
  /* smooth scroll to the different anchors in the page */
  $(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
     1000
    );
  });
  var nav = document.getElementById("nav");
  var sticky = document.getElementById("nav").offsetTop;
  var read_more = document.getElementById("read-more");
  /* sticky nav bar */
  function stickHeader() {
    if (window.pageYOffset >= sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }
  /*when scrolling, the navbar gets "fixed" to TOP */
  window.onscroll = function() {
    stickHeader();
  };
  /* ABOUT section READ MORE button */

  function toggleVisibility() {
    var p = document.getElementById("hidden-description");
    if (p.style.display === "none") {
      p.style.display = "block";
      read_more.innerText = "Read less";
    } else {
      p.style.display = "none";
      read_more.innerText = "Read more";
    }
  }
  /* getting the navbar responsive */
  function toggleDisplay() {
    var x = document.getElementById("nav");
    var current_class = x.className;
    if (x.className === "topnav" || x.className === "sticky") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
});
