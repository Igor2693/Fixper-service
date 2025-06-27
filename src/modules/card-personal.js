'use strict'

const cardPersonalRender = () => {
    
    const personalWrapper = document.querySelector('.personal-wrapper')
    let obj = []

    const cardInfo = async () => {
        return fetch('personal.json')
        .then(response => response.json())
    }
    
    cardInfo()
    .then(data => {
        data.forEach(item => {
            obj.push(item)         
        });
        render()
    })

    const render = () => {
        obj.forEach((item, index) => {
            personalWrapper.insertAdjacentHTML('beforeend', `
                <div class="personal-item swiper-slide">
                        <div class="personal-img">
                            <img src="${item.photo}" alt="person photo" class="person-photo">
                        </div>
                            <div class="person-info">
                                <h3 class="person-name">${item.name}</h3>
                                <span class="person-job">${item.position}</span>
                                <div class="person-achivs">
                                    <div class="achivs-item">
                                        <img src="/img/ok.png" alt="ok">
                                        <span>${item.workResult}</span>
                                    </div>
                                    <div class="achivs-item">
                                        <img src="/img/ok.png" alt="ok">
                                        <span>${item.experience}</span>
                                    </div>
                                    <div class="achivs-item">
                                        <img src="/img/ok.png" alt="ok">
                                        <span>${item.raiting}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
        })
    }


}

export default cardPersonalRender