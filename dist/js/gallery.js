"use strict";

let btns = document.querySelectorAll('.js-gallery-btn'),
    galleryCls = 'gallery',
    galleryBtnCloseCls = 'gallery__close',
    galleryHideCls = 'gallery--hidden',
    swiperWrapCls = 'gallery__slider-wrapper',
    galleryPrevBtnCls = 'swiper-button-prev-gallery',
    galleryNextBtnCls = 'swiper-button-next-gallery',
    galleryPaginationCls = 'swiper-pagination-gallery',
    galleryThumbsCls = 'gallery__thumbs',
    interleaveOffsetGallery = 0.5;

let swiperGalleryParams = {
    speed: 1000,
    loop: false,
    preventInteractionOnTransition: true,
    simulateTouch: false,
    watchSlidesProgress: true,
    preloadImages: false,
    lazy: true,
    pagination: {
        el: "",
        type: 'custom',
        clickable: false,
        renderCustom: function (swiper, current, total) {
            return ('<div class="main-card__slider-pagination-inside">0'
                + current +
                '<div class="main-card__slider-pagination-separator"></div> 0'
                + total +
                '</div>');
        }
    },
    navigation: {
        nextEl: "",
        prevEl: "",
    },
    thumbs: {
        swiper: ""
    },
    on: {
        progress: function(){
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffsetGallery,
                    innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-fig").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
            }
        },
        setTransition: function(speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-fig").style.transition = speed + "ms";
            }
        }
    }
};
let swiperThumbsParams = {
    spaceBetween: 24,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
};

let toggleGallery = function(gallery, section, on = true){
    if (on) {
        gallery.classList.remove(galleryHideCls);
        section.style.zIndex = '999';
    } else {
        gallery.classList.add(galleryHideCls);
        section.style.zIndex = '';
    }
};

let initSwiper = function(gallery){
    let swiperParams = Object.assign({}, swiperGalleryParams);
    swiperParams.pagination.el = gallery.pagination;
    swiperParams.navigation.nextEl = gallery.next;
    swiperParams.navigation.prevEl = gallery.prev;
    window.swiperThumbs = new Swiper(gallery.thumbs, swiperThumbsParams);
    swiperParams.thumbs.swiper = window.swiperThumbs;
    window.swiperGallery = new Swiper(gallery.initEl.querySelector('.swiper-container'), swiperParams);
};

let returnEls = function(btn){
    let section = btn.closest('section'),
        gallery = section.querySelector('.' + galleryCls),
        initEl = section.querySelector('.' + swiperWrapCls),
        closeBtn = gallery.querySelector('.' + galleryBtnCloseCls),
        nextBtn = gallery.querySelector('.' + galleryNextBtnCls),
        prevBtn = gallery.querySelector('.' + galleryPrevBtnCls),
        pagination = gallery.querySelector('.' + galleryPaginationCls),
        thumbs = gallery.querySelector('.' + galleryThumbsCls);
    return {
        section: section,
        gallery: gallery,
        closeBtn: closeBtn,
        next: nextBtn,
        prev: prevBtn,
        pagination: pagination,
        initEl: initEl,
        thumbs: thumbs
    }
};

btns.forEach(function (btn) {
    let UI = returnEls(btn);
    btn.addEventListener('click', function(){
        toggleGallery(UI.gallery, UI.section);
        initSwiper(UI);
        UI.closeBtn.addEventListener('click', function close(){
            toggleGallery(UI.gallery, UI.section, false);
            window.swiperThumbs.destroy();
            window.swiperGallery.destroy();
            UI.closeBtn.removeEventListener('click', close)
        })
    });

});
