// Only one FAQ item open at a time (nicer on mobile, less scroll-hunting)
document.addEventListener("DOMContentLoaded", function () {
  var allDetails = document.querySelectorAll(".faq details");
  allDetails.forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (d.open) {
        allDetails.forEach(function (other) {
          if (other !== d) other.open = false;
        });
      }
    });
  });
});
