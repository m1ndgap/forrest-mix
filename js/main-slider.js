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
    preventInteractionOnTransition: 'true',
    simulateTouch: false,
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


