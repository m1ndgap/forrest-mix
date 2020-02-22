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
        delay:7000
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
            let activeSlide = this.slides[this.activeIndex],
                prevSlide = this.slides[this.previousIndex],
                slides = Array.from(this.slides);
            slides.forEach(function (el) {
                el.classList.remove('slide-zoom');
            });
            prevSlide.classList.remove('slide-zoom');
            activeSlide.classList.add('slide-zoom');
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

// old main slider
// var mySwiper4 = new Swiper('.slides .master-slider', {
//     loop: true,
//     speed: 3000,
//     preloadImages: false,
//     preventInteractionOnTransition: 'true',
//     simulateTouch: false,
//     lazy: {
//         loadPrevNext: true,
//         loadPrevNextAmount: 10,
//     },
//     autoplay: {
//         delay: slideDelay,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span data-slide="' + index + '" class="' + className + '">' + '<span class="swiper-inside-bullet"></span>' + '</span>';
//         },
//     },
//     on: {
//         paginationRender: function(){
//             let bullets = Array.from(this.pagination.bullets);
//             bullets.forEach(function(el) {
//                 el.addEventListener('click', function(){
//                     let picSlide = +el.dataset.slide + 1;
//                     promoSlider.slideTo(picSlide);
//                     cursiveSlider.slideTo(picSlide);
//                 });
//             })
//         },
//         autoplay: function() {
//             //console.log("autoplay!");
//             promoSlider.slideNext();
//             cursiveSlider.slideNext()
//             prgbar.animate(1.0)
//         },
//         slideChangeTransitionStart: function () {
//             // let picSlide = this.activeIndex,
//             //     realPicSlide = this.realIndex,
//             //     prevSlide = this.previousIndex;
//             // console.log("active index: " + picSlide + "\nreal index: " + realPicSlide + "\nprev index: " + prevSlide)
//             // promoSlider.slideToLoop(realPicSlide);
//             // cursiveSlider.slideToLoop(realPicSlide);
//         },
//         slideChangeTransitionEnd: function () {
//             let activeSlide = this.slides[this.activeIndex],
//                 prevSlide = this.slides[this.previousIndex],
//                 slides = Array.from(this.slides);
//             slides.forEach(function (el) {
//                 el.classList.remove('slide-zoom');
//             });
//             prevSlide.classList.remove('slide-zoom');
//             activeSlide.classList.add('slide-zoom');
//         }
//     },
// });


// old card sliders

/*
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
        effect: "fade",
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
    let mainBtnLink = element.parentElement.querySelector('.main-card__book-btn');

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
                let roomCurrentLink = activeSlide.querySelector('.main-card__subtitle').dataset.roomhref;
                let currentLink = activeSlide.querySelector('.main-card__subtitle').dataset.href;
                if (typeof roomCurrentLink !== 'undefined') {
                    btnLink.setAttribute("href", roomCurrentLink);
                } else if (typeof currentLink !== 'undefined') {
                    mainBtnLink.setAttribute("href", currentLink);
                }
            }
        },
    })

});
*/
