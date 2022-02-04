const slider = document.querySelector('.images');
const img = document.querySelector('.img');
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
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
let elWidth = img.offsetWidth * 5
nextBtn.addEventListener('click', () => {
    
    sideScroll(slider, 'left', 10, elWidth, 25);
    // if (slider.classList.contains('slide')){
    //     // slider.style.setProperty("transform", "none")
    //     // console.log(typeof(slider.style.transform = "translateX(" + `${-300 - 300}` + "px)"))
    //     // console.log(slider.style.transform)
    //     slider.classList.remove('slide')
    //     slider.classList.add('slide2')
        console.log(true)
    //     console.log(slider.style.transform)
    //     return
    //     // slider.style.transform = "translateX(0px)"
    // }
    // slider.classList.add('slide')
    // slider.style.transform = "translateX(-300px)"
    // console.log(compStyles.getPropertyValue('transform'))
    // console.log(slider.scrollLeft)
    // slider.scrollLeft += 1000;
    // console.log(slider.scrollLeft)
    // slider.classList.remove('slide');
    // slider.classList.add('slide');
})

prevBtn.addEventListener('click', () => {
    sideScroll(slider, 'right', 10, elWidth, 20);
})