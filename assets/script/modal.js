/* jshint esversion: 8 */

// Creates a popup window that has more text
(() => {
  const modalBtns = Array.from(document.querySelectorAll(".otherPages"));
  modalBtns.forEach(btn => {
    btn.onclick = function() {
      const modal = btn.getAttribute('data-modal');
      document.getElementById(modal).style.display = "block";
      document.querySelector("body").style.overflow = 'hidden';
    };
  });
  

  // close button
  const closeBtns = Array.from(document.querySelectorAll(".close-button"));
  closeBtns.forEach(btn => {
    btn.onclick = function() {
      let modal = btn.closest('.modal');
      modal.style.display = "none";
      document.querySelector("body").style.overflow = 'visible';
    };
  });
  
  window.onclick = function(event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
      document.querySelector("body").style.overflow = 'visible';
    }
  };
  })();
  