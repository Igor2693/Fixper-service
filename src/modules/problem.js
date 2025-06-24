'use strict'

const problemBlock = () => {
    const problemItem = document.querySelectorAll('.problem-item')
    const problemsContant = document.querySelector('.problems-contant')
    const openProblem = document.querySelector('.open-problem')
    const choseOtherProblem = document.querySelector('.chose-other-problem')



    problemItem.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            if (e.target == item) {
                openProblem.style.opacity = 1
                problemsContant.style.display = 'none'
            }
        })
    })

    choseOtherProblem.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e.target);

        if (e.target.closest('a') || e.target.closest('img')) {
            openProblem.style.opacity = 0
            problemsContant.style.display = 'block'

        }
    })

}

export default problemBlock