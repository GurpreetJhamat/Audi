const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".toggle");
const navHidden = document.querySelector(".nav__hidden");

menuToggle.addEventListener("click", () => {
  navHidden.classList.toggle("expand");
  nav.classList.toggle("open");
});

const slider = document.querySelector(".showcase__images");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {
  slider.style.transform = "translateX(-33%)";
});
prevBtn.addEventListener("click", () => {
  slider.style.transform = "translateX(100%)";
});
console.log(slider);
