"use strict";



console.log(123);
let accords = document.querySelectorAll('.accordion__item');
accords.forEach(element => {
    let title = element.querySelector('.accordion__item-title');
    let list = element.querySelector('.accordion__list');
    let button = element.querySelector('.accordion__item-title_button');
    title.addEventListener('click', function () {
        list.classList.toggle('accordion__list--active');
        button.classList.toggle('accordion__item-title_button--active');
    }, false)
});
