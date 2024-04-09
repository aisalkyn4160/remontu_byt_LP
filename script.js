// -------------------------------------------header--------------------------------------
const header = document.querySelector('.header')
const burger = document.querySelector('.burger')
const headerMenu = document.querySelector('.header-menu')
const closeBtn = document.querySelector('.close-btn')
const transparentBg = document.querySelector('.transparent-bg')
const container = document.querySelector('.header .container')
const navMenuLi = document.querySelectorAll('.nav-menu ul li a')

burger.addEventListener('click', () => {
    headerMenu.style.right = '0'
    headerMenu.style.transition = 'all 0.5s ease-in-out';
    transparentBg.style.right = '0'
    document.body.classList.add('no-scroll')
    container.style.overflow = 'visible'

})

closeBtn.addEventListener('click', () => {
    headerMenu.style.right = '-100%'
    headerMenu.style.transition = 'all 0.5s ease-in-out'
    transparentBg.style.right = '-200%'
    document.body.classList.remove('no-scroll')
    container.style.overflow = 'hidden'
})

navMenuLi.forEach(item => {
    item.addEventListener('click', () => {
        headerMenu.style.right = '-100%'
        headerMenu.style.transition = 'all 0.5s ease-in-out'
        transparentBg.style.right = '-200%'
        document.body.classList.remove('no-scroll')
        container.style.overflow = 'hidden'
    })
})

