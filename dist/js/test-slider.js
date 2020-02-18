var testswiper = new Swiper('.swiper-container', {
    speed: 3000,
    loop: true,
    preloadImages: false,
    simulateTouch: false,
    effect: "fade",
    // virtualTranslate: true,
    autoplay: {
        delay: 5000,
        // waitForTransition: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span data-slide="' + index + '" class="' + className + '">' + '<span class="swiper-inside-bullet"></span>' + '</span>';
        },
    },
    on: {
        autoplay: function() {
            console.log("autoplay!");
            this.slideNext();
        },
        transitionStart: function() {
            console.log("transition START")
        },
        transitionEnd: function() {
            console.log("transition END");
            // let actSlide = this.slides[this.activeIndex];
            // actSlide.setAttribute("style", actSlide.getAttribute('style') + "transform: scale(1.1)");
        }
    }
});
