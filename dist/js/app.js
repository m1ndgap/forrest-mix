'use strict';

function toggleClass(element, cls) {
    element.classList.toggle(cls);
}

let bookBtn = document.querySelector('.js-bookbtn');
let bookBtnClass = 'main-menu__bookbtn--active';

let waypoint = new Waypoint({
    element: document.querySelector('.slides'),
    handler: function(direction) {
        toggleClass(bookBtn, bookBtnClass);

    },
    offset: function() {
        return -this.element.clientHeight
    }
});


// type replacement for mobile/desktop date
// $('input[type="date"]').attr('type','text');

"use strict";

let orderUI = document.querySelector('.order-ui');
let orderUIs = orderUI.querySelectorAll('.order-ui__wrapper');

orderUIs.forEach(function(element){
    let arrow = element.querySelector('.order-ui__dropdown-arrow');
    element.addEventListener('click', function() {
        arrow.classList.toggle('order-ui__dropdown-arrow--active');
    })
});

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
    })

});

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
var mySwiper4 = new Swiper('.slides .swiper-container', {
    loop: true,
    speed: 3000,
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
        init: function () {
        },
        transitionEnd: function () {

        }
    }
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
})


