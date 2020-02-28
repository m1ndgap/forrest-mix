"use strict";
let interleaveOffsetMC = 0.5;


let swipers2 = document.querySelectorAll('.main-card__slider .swiper-container');
swipers2.forEach(function(element){
    let pagination = element.parentElement.querySelector('.swiper-pagination');
    let next =  element.parentElement.querySelector('.swiper-button-next');
    let prev =  element.parentElement.querySelector('.swiper-button-prev');

    new Swiper (element, {
        speed: 1000,
        loop: true,
        preventInteractionOnTransition: true,
        simulateTouch: false,
        watchSlidesProgress: true,
        pagination: {
            el: pagination,
            type: 'custom',
            clickable: false,
            renderCustom: function (swiper, current, total) {
                return ('<div class="main-card__slider-pagination-inside">0'
                    + current +
                    '<div class="main-card__slider-pagination-separator"></div> 0'
                    + total +
                    '</div>');
            }
        },
        navigation: {
            nextEl: next,
            prevEl: prev,
        },
        on: {
            progress: function(){
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    let slideProgress = swiper.slides[i].progress,
                        innerOffset = swiper.width * interleaveOffsetMC,
                        innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-fig").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            setTransition: function(speed) {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-fig").style.transition =
                        speed + "ms";
                }
            }
        }
    });
});
