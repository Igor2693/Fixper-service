'use strict'

const modalConnected = () => {
    const modalConnectedBtn = document.querySelector('.header-main__btn')
    const overlay = document.querySelector('.overlay')
    const connectedModal = document.querySelector('.connected-modal')
    const closeConnectedBtn = document.querySelector('.connected-modal-close')
    const btnProblem = document.querySelector('.open-problem-button')
    const problemButton = document.querySelector('.open-problem-button')
    const questSubtitle = document.querySelector('.quest-subtitle')


    const modalOn = () => {
        overlay.style.display = 'block'
        connectedModal.style.display = 'block'
    }

    const modalOff = () => {
        overlay.style.display = 'none'
        connectedModal.style.display = 'none'
    }

    modalConnectedBtn.addEventListener('click', () => {
        modalOn()
    })

    closeConnectedBtn.addEventListener('click', () => {
        modalOff()
    })

    overlay.addEventListener('click', () => {
        modalOff()
    })

    btnProblem.addEventListener('click', () => {
        modalOn()
    })
    problemButton.addEventListener('click', () => {
        modalOn()
    })

    questSubtitle.addEventListener('click', () => {
        modalOn()
    })

}

export default modalConnected