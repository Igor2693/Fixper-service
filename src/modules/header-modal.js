'use strict'

const headerModal = () => {
    const headerModal = document.querySelector('.header-modal')

    const close = document.querySelectorAll('.header-modal-close')
    console.log(close);

    close.forEach(item => {
        item.addEventListener('click', (e) => {
            headerModal.style.display = 'none'
        })
    })

}

export default headerModal