// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika produk-menu di klik
document.querySelector("#produk-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar utuk menghilangkan nav

const produks = document.querySelector("#produk-menu");

document.addEventListener("click", function (e) {
  if (!produks.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// slider produk

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slideTrack = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSliderPosition();
});

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSliderPosition();
});

function updateSliderPosition() {
  slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}
