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

// nextBtn.addEventListener("click", () => {
//   slider.style.transform = "translateX(-33%)";
// });
// prevBtn.addEventListener("click", () => {
//   slider.style.transform = "translateX(100%)";
// });
// console.log(slider);


// const slider = document.querySelector(".images");
// const slider2 = document.querySelector(".images-body");
const img = document.querySelector(".showcase__img");

console.log(slider, prevBtn, nextBtn, img)
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const prevBodyBtn = document.querySelector(".prev-body-btn");
// const nextBodyBtn = document.querySelector(".next-body-btn");
const contents = document.querySelectorAll(".showcase__model");
const tabItem = document.querySelectorAll(".showcase h2");

let compStyles = window.getComputedStyle(slider);
// let elWidth = (img.offsetWidth * 5)
// console.log(tabItem)
function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction === "left") {
      element.scrollLeft += step;
      slider.style.transform = "translateX(" + `${-step}` + "%)";
    } else {
      element.scrollLeft -= step;
    }
    scrollAmount += step;
    console.log(scrollAmount)
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
      console.log('hellooooooo')
    }
  }, speed);
}
nextBtn.addEventListener("click", () => {
  console.log('hello next')
  let elWidth = (img.offsetWidth);
  console.log(elWidth)
  sideScroll(slider, "left", 10, elWidth, 25);
});

prevBtn.addEventListener("click", () => {
  console.log("hello prev");
  let elWidth = img.offsetWidth * 5;
  sideScroll(slider, "right", 10, elWidth, 25);
});
// nextBodyBtn.addEventListener('click', () => {
//     let elWidth = (img.offsetWidth * 5)
//     sideScroll(slider2, 'left', 10, elWidth, 25);
// })

// prevBodyBtn.addEventListener('click', () => {
//     let elWidth = (img.offsetWidth * 5)
//     sideScroll(slider2, 'right', 10, elWidth, 25);
// })

// model.addEventListener('click', () => {
//     allModel.classList.add('show-tab')
//     allTypes.classList.remove('show-tab')
// })
// body.addEventListener('click', () => {
//     console.log('hello')
//     allTypes.classList.add('show-tab')
//     allModel.classList.remove('show-tab')
// })

tabItem.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContent();
    hideAllItems();
    // sideScroll(slider, 'left', 10, 0, 25);
    item.classList.add("active");
    contents[idx].classList.add("show-tab");
  });
});

function hideAllContent() {
  contents.forEach((content) => content.classList.remove("show-tab"));
  // contents.scrollLeft = 0;
  // sideScroll(slider1, 'left', 10, elWidth, 25);
}
function hideAllItems() {
  tabItem.forEach((item) => item.classList.remove("active"));
}