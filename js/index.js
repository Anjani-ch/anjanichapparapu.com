const body = document.querySelector('body')
const navWrapper = document.querySelector('nav')
const nav = document.querySelector('#nav')
const logo = document.querySelector('#logo')
const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelectorAll('nav ul a')
const year = document.querySelector('footer span')
const sections = document.querySelectorAll('section')

const addScrolledToNavIfScrolled = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 60) navWrapper.classList.add('scrolled')
    else navWrapper.classList.remove('scrolled')
}

const toggleClasses = () => {
    if (window.innerWidth <= 768) body.classList.toggle('overflow-hidden')

    nav.classList.toggle('open')
    menuIcon.classList.toggle('fa-times')
}

addEventListener('scroll', () => {
    addScrolledToNavIfScrolled()

    sections.forEach(section => {
        const rect = section.getBoundingClientRect()

        if (rect.top < window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'))
            navLinks.forEach(link => link.href.includes('#' + section.id) ? link.classList.add('active') : '')
        }
    })
    year.innerText = new Date().getFullYear()
})

nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        if (!e.target.id) toggleClasses()

        navLinks.forEach(link => link.classList.remove('active'))

        if (e.target === logo) navLinks[0].classList.add('active')
        else e.target.classList.add('active')
    }

    if (e.target === menuIcon) toggleClasses()
})

addScrolledToNavIfScrolled()