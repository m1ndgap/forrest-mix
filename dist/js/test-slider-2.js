let mainSliderSelector = '.main-slider-parallax',
    interleaveOffset = 0.5;


var promoSlider = new Swiper ('.js-main-subtitle',{
    loop: true,
    speed: 1500,
    preventInteractionOnTransition: 'true',
    simulateTouch: false,
    autoplay: false,
    on: {
        slideChange: function () {
            let actSlide = this.slides[this.activeIndex],
                prevSlide = this.slides[this.previousIndex];
            actSlide.classList.add('main-subtitle__promotion-link--activate');
            prevSlide.classList.remove('main-subtitle__promotion-link--activate');
        }
    },
});

var cursiveSlider = new Swiper ('.js-main-cursive' ,{
    speed: 3001,
    loop: true,
    preventInteractionOnTransition: true,
    simulateTouch: false,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

// Main Slider
let mainSliderOptions = {
    loop: true,
    speed:3000,
    autoplay:{
        delay:3000
    },
    loopAdditionalSlides: 10,
    grabCursor: true,
    watchSlidesProgress: true,
    on: {
        init: function(){
            this.autoplay.stop();
        },
        imagesReady: function(){
            this.el.classList.remove('loading');
            this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
        },
        autoplay: function() {
            promoSlider.slideNext();
            cursiveSlider.slideNext();
        },
        progress: function(){
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffset,
                    innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-fig").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
            }
        },
        touchStart: function() {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
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
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);


let swipers = document.querySelectorAll('.main-card__slider-test1 .swiper-container');
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
        effect: "fade",
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
    });
});

let swipers2 = document.querySelectorAll('.main-card__slider-test2 .swiper-container');
swipers2.forEach(function(element){
    let pagination = element.parentElement.querySelector('.swiper-pagination');
    let next =  element.parentElement.querySelector('.swiper-button-next');
    let prev =  element.parentElement.querySelector('.swiper-button-prev');

    new Swiper (element, {
        speed: 1000,
        loop: true,
        preventInteractionOnTransition: true,
        simulateTouch: false,
        allowTouchMove: false,
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
                        innerOffset = swiper.width * interleaveOffset,
                        innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            setTransition: function(speed) {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                        speed + "ms";
                }
            }
        }
    });
});
