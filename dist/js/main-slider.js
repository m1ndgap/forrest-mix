// function slideBackup(slideObj) {
//     let currentSlide = slideObj.el.querySelector(".swiper-slide-active");
//     console.log(currentSlide);
//     let backUpImg = document.querySelector(".js-backup-img");
//     let img = currentSlide.querySelector('picture img');
//     backUpImg.querySelector('img').src = img.src;
//     console.log(img.src);
// };

let slideDelay = 3000;
const swiperAnimation = new SwiperAnimation();

let clearZoom = function(slides) {};

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
    loop: true,
    speed: 3000,
    preloadImages: false,
    preventInteractionOnTransition: 'true',
    simulateTouch: false,
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 10,
    },
    autoplay: {
        delay: slideDelay,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<span class="swiper-inside-bullet"></span>' + '</span>';
        },
    },
    on: {
        slideChangeTransitionStart: function () {
            let picSlide = this.activeIndex;
            promoSlider.slideTo(picSlide);
            cursiveSlider.slideTo(picSlide);
        },
        slideChangeTransitionEnd: function () {
            let activeSlide = this.slides[this.activeIndex],
                prevSlide = this.slides[this.previousIndex],
                slides = Array.from(this.slides);
            console.log(slides);
            slides.forEach(function (el) {
                el.classList.remove('slide-zoom');
            });
            activeSlide.classList.add('slide-zoom');
        }
    },
});

let strokeWidth = 2;
let trailColor = 'transparent';
let mainColor = "#FFFFFF";
let prgbar = new ProgressBar.Circle('.swiper-pagination-bullet-active', {
    strokeWidth: strokeWidth,
    duration: slideDelay,
    color: mainColor,
    trailColor: trailColor,
    trailWidth: strokeWidth,
    svgStyle: null
});
prgbar.animate(1.0, function () {
    prgbar.destroy();
});
mySwiper4.on('transitionEnd', function() {
    let bar = new ProgressBar.Circle('.swiper-pagination-bullet-active', {
        strokeWidth: strokeWidth,
        duration: slideDelay,
        color: mainColor,
        trailColor: trailColor,
        trailWidth: strokeWidth,
        svgStyle: null
    });
    bar.animate(1.0, function () {
        bar.destroy();
    });
});




