'use strict'

const modalConnected = () => {
    const modalConnectedBtn = document.querySelector('.header-main__btn')
    const overlay = document.querySelector('.overlay')
    const connectedModal = document.querySelector('.connected-modal')
    const closeConnectedBtn = document.querySelector('.connected-modal-close')

    const modalOff = () => {
        overlay.style.display = 'none'
        connectedModal.style.display = 'none'
    }

    modalConnectedBtn.addEventListener('click', () => {
        overlay.style.display = 'block'
        connectedModal.style.display = 'block'
    })

    closeConnectedBtn.addEventListener('click', () => {
        modalOff()
    })

    overlay.addEventListener('click', () => {
        modalOff()
    })   
}

export default modalConnected