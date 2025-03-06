// ==========
// ToTopBtn
// ==========
let ToTopBtn = document.getElementById("ToTopBtn");
ToTopBtn.addEventListener("click", topFunction);
window.onscroll = function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    ToTopBtn.style.display = "block";
  } else {
    ToTopBtn.style.display = "none";
  }
};

function topFunction() {
  document.documentElement.scrollTop = 0;
  document.getElementById("ToTopBtn").style.classList.add = "animate-spin";
}
// ==========
// end of ToTopBtn
// ==========



// =========
// navbar
// =========
const navbar = document.getElementById("navbar");
const bars = document.getElementById("bars");
const xmark = document.getElementById("xmark");

function activeNavbar() {
  navbar.classList.remove("translate-x-full");
}
function deactiveNavbar() {
  navbar.classList.add("translate-x-full");
}

bars.addEventListener("click", activeNavbar);
xmark.addEventListener("click", deactiveNavbar);
// =========
// end of navbar
// =========