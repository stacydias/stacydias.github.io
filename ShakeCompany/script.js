//Header-Scroll Opacity Function
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header #header-div").fadeOut();
  } else {
    $("header #header-div").fadeIn();
  }
});

//Back to Top button Function
window.onscroll = function () {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-btn").style.display = "block";
  } else {
    document.getElementById("top-btn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}