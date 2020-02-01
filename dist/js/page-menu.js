"use strict";

let pageMenu = document.querySelector('.page-menu');
let sideContent = document.querySelector('.side-content-container');


document.addEventListener('scroll', function () {
    let objRect = pageMenu.getBoundingClientRect().top;
    let viewport = document.body.clientWidth;
    if (viewport > 1280) {
        if (objRect < 200) {
            pageMenu.classList.add('page-menu--fixed')
        } else if (objRect > 200) {
            pageMenu.classList.remove('page-menu--fixed')
        }
    }
});
