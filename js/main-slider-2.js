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

var mySwiper4 = new Swiper('.slides .master-slider-2', {
    speed: 3000,
    loop: true,
    effect: 'fade',
    preloadImages: false,
    simulateTouch: false,
    autoplay: {
        delay: slideDelay,
    },
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
        autoplay: function() {
            console.log("autoplay!");
            promoSlider.slideNext();
            cursiveSlider.slideNext();
        },
        slideChangeTransitionStart: function () {
            console.log("Transition start");
        },
        slideChangeTransitionEnd: function () {
            console.log("Transition end");
        }
    },
});


let prgbar = new ProgressBar.Circle('.swiper-pagination-bullet-active', {
    strokeWidth: strokeWidth,
    duration: slideDelay,
    color: mainColor,
    trailColor: trailColor,
    trailWidth: strokeWidth,
    svgStyle: null
});
prgbar.animate(1.0);
mySwiper4.on('transitionEnd', function() {
    let bullets = Array.from(mySwiper4.pagination.bullets);
    bullets.forEach(function(el) {
        let svg = el.querySelector('svg');
        if (svg) {
            svg.remove();
        }
    });
    console.log(3333);
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
mySwiper4.on('transitionStart', function() {
    let bullets = Array.from(mySwiper4.pagination.bullets);
    bullets.forEach(function(el) {
        let svg = el.querySelector('svg');
        if (svg) {
            svg.remove();
        }
    });
    console.log(2222)
});





