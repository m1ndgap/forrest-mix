"use strict";

let SIslider1 = document.querySelectorAll('.similar-items--slides-1 .swiper-container');
SIslider1.forEach(function(element) {
    let toggles = element.parentNode.querySelectorAll('.swiper-toggle-area');
    var swiper = new Swiper(element, {
        speed: 500,
        preventInteractionOnTransition: true,
        simulateTouch: false,
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {
            init: function () {
                let that = this;
                toggles.forEach(function (elt, i) {
                    elt.addEventListener('mouseenter', function(){
                        that.slideTo(i);
                    })
                })
            }
        }
    })
});


let SIslider3 = document.querySelectorAll('.similar-items--slides-3 .swiper-container');
SIslider3.forEach(function(element) {
    let toggles = element.parentNode.querySelectorAll('.swiper-toggle-area');
    console.log(toggles);
    var swiper = new Swiper(element, {
        speed: 500,
        preventInteractionOnTransition: true,
        simulateTouch: false,
        allowTouchMove: false,
        watchSlidesProgress: true,
        on: {
            init: function () {
                let that = this;
                console.log("I N I T");
                toggles.forEach(function (elt, i) {
                    elt.addEventListener('mouseenter', function(){
                        that.slideTo(i);
                    })
                })
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
    })
});
