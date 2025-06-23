'use strict'

import Swiper from 'swiper/bundle';

const slider = () => {
    const swiper = new Swiper('.swiper-person', {
        //    slidesPerView: 3,
        // spaceBetween: 30,

         breakpoints: {
            800: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            370: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },

         // Navigation arrows
        navigation: {
             nextEl: '.arrow-next',
             prevEl: '.arrow-prew',
        },

    });

    const swiperReviews = new Swiper('.swiper-reviews', {
           slidesPerView: 2,
        spaceBetween: 30,

         breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            370: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            
        },

         // Navigation arrows
        navigation: {
             nextEl: '.reviews-next',
             prevEl: '.reviews-prev',
        },

    });

}

export default slider