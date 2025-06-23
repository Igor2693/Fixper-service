'use strict'

const mobileMenu = () => {
    const btnOpen = document.querySelector('.btn-open')
    const modalMenu = document.querySelector('.burger-menu')
    const btnClose = document.querySelector('.btn-close')



    btnOpen.addEventListener('click', () => {
        modalMenu.style.display = 'block'
    })
    btnClose.addEventListener('click', () => {
        modalMenu.style.display = 'none'
    })
    
}

export default mobileMenu