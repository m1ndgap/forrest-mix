let slideDelay = 7000;

// progress bar options
let strokeWidth = 2;
let trailColor = 'transparent';
let mainColor = "#FFFFFF";

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

var mySwiper4 = new Swiper('.slides .master-slider', {
    speed: 300,
    loop: true,
    preloadImages: false,
    simulateTouch: false,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    effect: 'fade',
    // lazy: {
    //     loadPrevNext: true,
    //     loadPrevNextAmount: 10,
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span data-slide="' + index + '" class="' + className + '">' + '<span class="swiper-inside-bullet"></span>' + '</span>';
        },
    },
    on: {
        // paginationRender: function(){
        //     let bullets = Array.from(this.pagination.bullets);
        //     bullets.forEach(function(el) {
        //         el.addEventListener('click', function(){
        //             let picSlide = +el.dataset.slide + 1;
        //             promoSlider.slideTo(picSlide);
        //             cursiveSlider.slideTo(picSlide);
        //         });
        //     })
        // },
        // autoplay: function() {
        //     //console.log("autoplay!");
        //     promoSlider.slideNext();
        //     cursiveSlider.slideNext();
        // },
        //slideChangeTransitionStart: function () {
            // let picSlide = this.activeIndex,
            //     realPicSlide = this.realIndex,
            //     prevSlide = this.previousIndex;
            // console.log("active index: " + picSlide + "\nreal index: " + realPicSlide + "\nprev index: " + prevSlide)
            // promoSlider.slideToLoop(realPicSlide);
            // cursiveSlider.slideToLoop(realPicSlide);
        //},
        // slideChangeTransitionEnd: function () {
        //     // let activeSlide = this.slides[this.activeIndex],
        //     //     prevSlide = this.slides[this.previousIndex],
        //     //     slides = Array.from(this.slides);
        //     // slides.forEach(function (el) {
        //     //     el.classList.remove('slide-zoom');
        //     // });
        //     // prevSlide.classList.remove('slide-zoom');
        //     // activeSlide.classList.add('slide-zoom');
        // }
    },
});


// let prgbar = new ProgressBar.Circle('.swiper-pagination-bullet-active', {
//     strokeWidth: strokeWidth,
//     duration: slideDelay,
//     color: mainColor,
//     trailColor: trailColor,
//     trailWidth: strokeWidth,
//     svgStyle: null
// });
console.log(1111);
// mySwiper4.on('transitionEnd', function() {
//     let bullets = Array.from(mySwiper4.pagination.bullets);
//     bullets.forEach(function(el) {
//         let svg = el.querySelector('svg');
//         if (svg) {
//             svg.remove();
//         }
//     });
//     console.log(3333);
//     let bar = new ProgressBar.Circle('.swiper-pagination-bullet-active', {
//         strokeWidth: strokeWidth,
//         duration: slideDelay,
//         color: mainColor,
//         trailColor: trailColor,
//         trailWidth: strokeWidth,
//         svgStyle: null
//     });
//
// });
// mySwiper4.on('transitionStart', function() {
//     let bullets = Array.from(mySwiper4.pagination.bullets);
//     bullets.forEach(function(el) {
//         let svg = el.querySelector('svg');
//         if (svg) {
//             svg.remove();
//         }
//     });
//     console.log(2222)
// });





