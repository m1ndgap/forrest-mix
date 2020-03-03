"use strict";

let pageMenu = document.querySelector('.page-menu');
let sideContent = document.querySelector('.side-content-container');
let viewportSticky = document.body.clientWidth;


document.addEventListener('scroll', function () {
    let objRect = pageMenu.getBoundingClientRect().top;
    console.log(objRect);
    if (viewportSticky > 1280) {
        if (objRect < 250) {
            pageMenu.classList.add('page-menu--fixed')
        } else if (objRect > 250) {
            pageMenu.classList.remove('page-menu--fixed')
        }
    }
});
