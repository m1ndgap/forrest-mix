"use strict";

let swipers = document.querySelectorAll('.main-card__slider .swiper-container');
swipers.forEach(function(element){
    let pagination = element.parentElement.querySelector('.swiper-pagination');
    let next =  element.parentElement.querySelector('.swiper-button-next');
    let prev =  element.parentElement.querySelector('.swiper-button-prev');
    new Swiper (element, {
        speed: 1000,
        loop: true,
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
