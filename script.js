const slider = document.querySelector('.images');
const slider2 = document.querySelector('.images-body');
const img = document.querySelector('.img');
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const prevBodyBtn = document.querySelector('.prev-body-btn')
const nextBodyBtn = document.querySelector('.next-body-btn')
const allModel = document.querySelector('.all-models')
const allTypes = document.querySelector('.all-types')
const model = document.querySelector('.model')
const body = document.querySelector('.body')
let compStyles = window.getComputedStyle(slider);

function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
        if (direction === 'left') {
            element.scrollLeft += step;
            // slider.style.transform = "translateX(" + `${-step}` + "%)"
        } else {
            element.scrollLeft -= step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}
let elWidth = (img.offsetWidth * 5)
nextBtn.addEventListener('click', () => {
    sideScroll(slider, 'left', 10, elWidth, 25);
})

prevBtn.addEventListener('click', () => {
    sideScroll(slider, 'right', 10, elWidth, 25);
})
nextBodyBtn.addEventListener('click', () => {
    sideScroll(slider2, 'left', 10, elWidth, 25);
})

prevBodyBtn.addEventListener('click', () => {
    sideScroll(slider2, 'right', 10, elWidth, 25);
})

model.addEventListener('click', () => {
    allModel.classList.add('show-tab')
    allTypes.classList.remove('show-tab')
})
body.addEventListener('click', () => {
    console.log('hello')
    allTypes.classList.add('show-tab')
    allModel.classList.remove('show-tab')
})