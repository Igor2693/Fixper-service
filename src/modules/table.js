'use strict'

const showTable = () => {
    const table = document.querySelector('tbody')
    const invisTr = table.querySelectorAll('.table-invisible')
    const showMoreBtn = table.querySelector('.show-more-btn')
    const showLessBtn = table.querySelector('.show-less-btn')

    showMoreBtn.addEventListener('click', () => {
        invisTr.forEach(item => {
            item.style.display = 'table-row'
        })
        showMoreBtn.style.display = 'none'
        showLessBtn.style.display = 'flex'
    })
    
    showLessBtn.addEventListener('click', () => {
        invisTr.forEach(item => {
            item.style.display = 'none'
        })
        showMoreBtn.style.display = 'flex'
        showLessBtn.style.display = 'none'
    })
    
}

export default showTable