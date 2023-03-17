const btnHamburger = document.getElementById("btn-hamburger");

btnHamburger.addEventListener("click", function() {
  console.log('open hamburger');
  if (btnHamburger.classList.contains('open')) {
    btnHamburger.classList.remove('open')
  } else {
    btnHamburger.classList.add('open');
  }
});