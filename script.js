const slider = document.querySelector('.images');
const slider2 = document.querySelector('.images-body');
const img = document.querySelector('.img');
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const prevBodyBtn = document.querySelector('.prev-body-btn')
const nextBodyBtn = document.querySelector('.next-body-btn')
const contents = document.querySelectorAll('.models')
const tabItem = document.querySelectorAll('.showcase h2')

let compStyles = window.getComputedStyle(slider);
let elWidth = (img.offsetWidth * 5)
// console.log(tabItem)
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
    item.addEventListener('click', () => {
        hideAllContent()
        hideAllItems()
        item.classList.add('active')
        contents[idx].classList.add('show-tab')
    })
})

function hideAllContent(){
    contents.forEach(content => content.classList.remove('show-tab'))
    // contents.scrollLeft = 0;
    // sideScroll(slider1, 'left', 10, elWidth, 25);    
}
function hideAllItems(){
    tabItem.forEach(item => item.classList.remove('active'))
}