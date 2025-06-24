'use strict'

const reg = () => {

    const form = document.querySelectorAll('.summon-form-1')

    form.forEach(item => {
        const inputPhoneNumber = item.querySelector('.summon-input')

        item.addEventListener('submit', (e) => {
            e.preventDefault()
            let isError = false
            let obj = {}

            if (!/[^\d]/ig.test(inputPhoneNumber.value) && inputPhoneNumber.value !== '') {
                obj.tel = inputPhoneNumber.value
            } else {
                isError = true
            }

            if (!isError) {
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

    })

}

export default reg

