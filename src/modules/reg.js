'use strict'

const reg = () => {
    const form = document.querySelector('.summon-form-1')
    const inputPhoneNumber = form.querySelector('.summon-input')
    const summonBtn = form.querySelector('.summon-btn')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let isError = false
        let obj = {}

        if(!/[^\d]/ig.test(inputPhoneNumber.value)) {
            obj.tel = inputPhoneNumber.value         
        } else {
            isError = true
        }

        if(!isError) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            
        }
        inputPhoneNumber.value = ''

    })
    
    
}

export default reg

