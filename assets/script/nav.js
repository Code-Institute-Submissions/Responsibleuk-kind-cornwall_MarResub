/* jshint esversion: 8 */

// Create drop down nav bar for mobile devices with nav toggle
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".menu");
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-menu");
});
