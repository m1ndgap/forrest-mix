"use strict";

let swipers = document.querySelectorAll('.main-card__slider .swiper-container');
swipers.forEach(function(element){
    let pagination = element.parentElement.querySelector('.swiper-pagination');
    let next =  element.parentElement.querySelector('.swiper-button-next');
    let prev =  element.parentElement.querySelector('.swiper-button-prev');

    new Swiper (element, {
        speed: 1000,
        loop: true,
        preventInteractionOnTransition: true,
        simulateTouch: false,
        allowTouchMove: false,
        pagination: {
            el: pagination,
            type: 'custom',
            clickable: false,
            renderCustom: function (swiper, current, total) {
                return ('<div class="main-card__slider-pagination-inside">0'
                    + current +
                    '<div class="main-card__slider-pagination-separator"></div>  0'
                    + total +
                    '</div>');
            }
        },
        navigation: {
            nextEl: next,
            prevEl: prev,
        },
    });
});

let textSliders = document.querySelectorAll('.main-card-text-slider');
textSliders.forEach(function(element){
    let next =  element.parentElement.querySelector('.swiper-button-next');
    let prev =  element.parentElement.querySelector('.swiper-button-prev');
    let btnLink = element.parentElement.querySelector('.main-card__more-info');

    new Swiper (element, {
        speed: 1000,
        loop: true,
        spaceBetween: 110,
        preventInteractionOnTransition: true,
        simulateTouch: false,
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: next,
            prevEl: prev,
        },
        on: {
            slideChange: function () {
                let activeSlide = this.slides[this.activeIndex];
                let currentLink = activeSlide.querySelector('.main-card__subtitle').dataset.href;
                btnLink.setAttribute("href", currentLink);
            }
        },
    })

});
