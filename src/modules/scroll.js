'use strict'

const scroll = () => {
    const navList = document.querySelector('.header-nav__list')
    const footerNavList = document.querySelector('.footer-nav-list')

    const scrollToStart = document.querySelector('.scroll-to-start')
    const problemsSection = document.querySelector('.problems')

    navList.addEventListener('click', (e) => {
        e.preventDefault()
        const block = e.target.getAttribute('href').substr(1)
        document.getElementById(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })

    footerNavList.addEventListener('click', (e) => {
        e.preventDefault()
        const block = e.target.getAttribute('href').substr(1)
        document.getElementById(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })



    scrollToStart.addEventListener('click', (e) => {
        e.preventDefault()
        const block = e.target.parentNode.getAttribute('href').substr(1)
        document.getElementById(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

    document.addEventListener('scroll', (e) => {
        if (problemsSection.getBoundingClientRect().top > 0) {
            document.querySelector('.scroll-start').style.display = 'none'
        } else {
            document.querySelector('.scroll-start').style.display = 'block'
        }


    })
}

export default scroll