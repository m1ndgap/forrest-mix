'use strict';

let specialSlider = document.querySelector('.specials-slider__slider .swiper-container'),
    sliderTextCls = 'specials-slider__slide-text',
    sliderTitleCls = 'specials-slider__slide-title';

let specialSliderOptions = {
    loop: true,
    speed:3000,
    autoplay:{
        delay:7000,
        //disableOnInteraction: false,
    },
    //loopAdditionalSlides: 10,
    allowTouchMove: false,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function() {
            let activeSlide = this.slides[this.realIndex],
                activeText = activeSlide.querySelector('.' + sliderTextCls),
                activeTitle = activeSlide.querySelector('.' + sliderTitleCls);
            // console.log(activeText);
            // console.log(activeSlide);
        },
        progress: function(){
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffset,
                    innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector('.slide-fig').style.transform =
                    'translate3d(' + innerTranslate + 'px, 0, 0)';
            }
        },
        touchStart: function() {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = '';
            }
        },
        setTransition: function(speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + 'ms';
                swiper.slides[i].querySelector('.slide-fig').style.transition =
                    speed + 'ms';
            }
        },
        slideChangeTransitionStart: function () {
            let swiper = this,
                texts = swiper.el.querySelectorAll('.' + sliderTextCls),
                titles = swiper.el.querySelectorAll('.' + sliderTitleCls);
            for (let i = 0; i < titles.length; ++i) {
                texts[i].classList.remove(sliderTextCls + '--active');
                titles[i].classList.remove(sliderTitleCls + '--active');
            }
        },
        slideChangeTransitionEnd: function () {
            let swiper = this,
                activeSlide = swiper.el.querySelector('.swiper-slide-active'),
                activeText = activeSlide.querySelector('.' + sliderTextCls),
                activeTitle = activeSlide.querySelector('.' + sliderTitleCls);
            console.log('real index is ' + this.realIndex);
            console.log('active index is ' + this.activeIndex);
            console.log(activeSlide);
            activeText.classList.add(sliderTextCls + '--active');
            activeTitle.classList.add(sliderTitleCls + '--active');
        },
    }
};

let specialsSwiper = new Swiper(specialSlider, specialSliderOptions);
