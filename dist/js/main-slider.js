let slideDelay = 7000,
    mainSliderSelector = '.slides .master-slider',
    interleaveOffset = 0.5;

// progress bar options
let strokeWidth = 2;
let trailColor = 'transparent';
let mainColor = '#FFFFFF';

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


let mainSliderOptions = {
    loop: true,
    speed:3000,
    autoplay:{
        delay:7000,
        //disableOnInteraction: false,
    },
    loopAdditionalSlides: 10,
    grabCursor: true,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span data-slide="' + index + '" class="' + className + '">' + '<span class="swiper-inside-bullet"></span>' + '</span>';
        },
    },
    on: {
        paginationRender: function(){
            let bullets = Array.from(this.pagination.bullets);
            bullets.forEach(function(el) {
                el.addEventListener('click', function(){
                    let picSlide = +el.dataset.slide + 1;
                    promoSlider.slideTo(picSlide);
                    cursiveSlider.slideTo(picSlide);
                });
            })
        },
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
                el.querySelector('img').classList.remove('slide-zoom');
            });
            prevSlide.querySelector('img').classList.remove('slide-zoom');
            activeSlide.querySelector('img').classList.add('slide-zoom');
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


let prgbar = new ProgressBar.Circle('.swiper-pagination-bullet-active', {
    strokeWidth: strokeWidth,
    duration: slideDelay,
    color: mainColor,
    trailColor: trailColor,
    trailWidth: strokeWidth,
    svgStyle: null
});
prgbar.animate(1.0);
mainSlider.on('transitionEnd', function() {
    let bullets = Array.from(mainSlider.pagination.bullets);
    bullets.forEach(function(el) {
        let svg = el.querySelector('svg');
        if (svg) {
            svg.remove();
        }
    });
    let bar = new ProgressBar.Circle('.swiper-pagination-bullet-active', {
        strokeWidth: strokeWidth,
        duration: slideDelay,
        color: mainColor,
        trailColor: trailColor,
        trailWidth: strokeWidth,
        svgStyle: null
    });
    bar.animate(1.0);
});
mainSlider.on('transitionStart', function() {
    let bullets = Array.from(mainSlider.pagination.bullets);
    bullets.forEach(function(el) {
        let svg = el.querySelector('svg');
        if (svg) {
            svg.remove();
        }
    });
});





