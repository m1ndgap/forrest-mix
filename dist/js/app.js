'use strict';


// function slideBackup(slideObj) {
//     let currentSlide = slideObj.el.querySelector(".swiper-slide-active");
//     console.log(currentSlide);
//     let backUpImg = document.querySelector(".js-backup-img");
//     let img = currentSlide.querySelector('picture img');
//     backUpImg.querySelector('img').src = img.src;
//     console.log(img.src);
// };

const swiperAnimation = new SwiperAnimation();
var mySwiper4 = new Swiper('.swiper-container', {
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    on: {
        init: function () {
            swiperAnimation.init(this).animate();
        },
        slideChange: function () {
            swiperAnimation.init(this).animate();
        }
    }
});



