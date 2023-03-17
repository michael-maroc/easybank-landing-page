const btnHamburger = document.getElementById("btn-hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay")

btnHamburger.addEventListener("click", function() {
  console.log('open hamburger');

  if (header.classList.contains('open')) { // Close hamburger menu
    header.classList.remove('open')
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  }
  else {  // Open hamburger menu
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }
});