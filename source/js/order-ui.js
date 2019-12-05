"use strict";

let orderUI = document.querySelector('.order-ui');
let orderUIs = orderUI.querySelectorAll('.order-ui__wrapper');

orderUIs.forEach(function(element){
    let arrow = element.querySelector('.order-ui__dropdown-arrow');
    element.addEventListener('click', function() {
        arrow.classList.toggle('order-ui__dropdown-arrow--active');
    })
});
