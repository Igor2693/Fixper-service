'use strict'

const timer = () => {
    const timerDays = document.querySelector('.timer-days')
    const timerHours = document.querySelector('.timer-hours')
    const timerMinutes = document.querySelector('.timer-minutes')
    const timerSeconds = document.querySelector('.timer-seconds')
    let idInterval

    const date = () => {
        const dateNow = new Date().getTime()
        const dateEnd = new Date('27 June 2025').getTime()
        const deadline = Math.floor((dateEnd - dateNow) / 1000)

        let seconds = deadline % 60
        let minutes = Math.floor(deadline / 60 % 60)
        let hours = Math.floor(deadline / 60 / 60 % 24)
        let days = Math.floor(deadline / 60 / 60 / 24)

        return { deadline, seconds, minutes, hours, days }
    }

    const timer = () => {
        const newDate = date()

        timerDays.textContent = newDate.days < 10 ? `0${newDate.days}` : newDate.days
        timerHours.textContent = newDate.hours < 10 ? `0${newDate.hours}` : newDate.hours
        timerMinutes.textContent = newDate.minutes < 10 ? `0${newDate.minutes}` : newDate.minutes
        timerSeconds.textContent = newDate.seconds < 10 ? `0${newDate.seconds}` : newDate.seconds

        if (newDate.deadline < 0) {
            timerDays.textContent = '00'
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
            clearInterval(idInterval)
        }
    }

    idInterval = setInterval(timer, 1000)
}

export default timer