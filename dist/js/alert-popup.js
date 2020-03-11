"use strict";

let mainlogo = document.querySelector('.menu-fixed__link--main'),
    mobilelogo = document.querySelector('.main-menu__mobile-logo'),
    popupalert = document.querySelector('.alert-popup'),
    alertClose = popupalert.querySelector('.alert-popup__close');

window.addEventListener('load', function () {
    console.log("loaded");
    window.timeout = setTimeout(function () {
        popupalert.classList.add('alert-popup--active')
    }, 1000)

});

mainlogo.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupalert.classList.toggle('alert-popup--active')
});

mobilelogo.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupalert.classList.toggle('alert-popup--active')
});

alertClose.addEventListener('click', function () {
    popupalert.classList.remove('alert-popup--active')
});
