const nav = document.querySelector('.nav')
const menuToggle = document.querySelector('.toggle');
const navHidden = document.querySelector('.nav__hidden')

menuToggle.addEventListener('click', () => {
    navHidden.classList.toggle('expand')
    nav.classList.toggle('open')
})