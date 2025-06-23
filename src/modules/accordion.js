'use strict'

const accordion = () => {
    const elementBtn = document.querySelectorAll('.element-btn')
    const accordionWrapper = document.querySelector('.accordion')
    const elements = document.querySelectorAll('.element-top')
    const elementBot = document.querySelectorAll('.element-bot')


    accordionWrapper.addEventListener('click', (e) => {
        e.preventDefault() 
        if(e.target.closest('.element')) {
            elements.forEach((item, index) => {
                if(e.target.closest('.element-top') === item) {
                    item.classList.add('active')
                    elementBot[index].style.display = 'block'
                } else {
                    item.classList.remove('active')
                    elementBot[index].style.display = 'none'
                }
                
            })
            
        }
        
    })



    // elementBtn.forEach(btn => {
    //     btn.addEventListener('click', (e) => {
    //     e.preventDefault()
        
        
    // })
    // })
    
    
}

export default accordion