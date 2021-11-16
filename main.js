$(document).ready(function () {
  $(".pdf").addClass("animated bounce");
  $(".card-title").addClass("animated fadeInLeft");

  $(".pdf").on("click", function () {
    $(".pdf").addClass("animated hinge");
  });

  let mybutton = document.getElementById("btn-back-to-top");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 350 ||
      document.documentElement.scrollTop > 350
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});
