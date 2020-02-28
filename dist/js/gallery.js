"use strict";

let btns = document.querySelectorAll('.js-gallery-btn'),
    galleryClass = 'gallery',
    galleryBtnCloseClass = 'gallery__close',
    galleryHideClass = 'gallery--hidden';


let toggleGallery = function(gallery, section, on = true){
    if (on) {
        gallery.classList.remove(galleryHideClass);
        section.style.zIndex = '999';
    } else {
        gallery.classList.add(galleryHideClass);
        section.style.zIndex = '';
    }
};

btns.forEach(function (btn) {
    let
        section = btn.closest('section'),
        gallery = section.querySelector('.' + galleryClass),
        closeBtn = gallery.querySelector('.' + galleryBtnCloseClass);
    console.log(closeBtn);
    console.log(gallery);
    console.log(section);
    btn.addEventListener('click', function(){
        toggleGallery(gallery, section);
        closeBtn.addEventListener('click', function close(){
            toggleGallery(gallery, section, false);
            closeBtn.removeEventListener('click', close)
        })
    });

});
