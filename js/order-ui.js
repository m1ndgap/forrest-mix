"use strict";

let orderUI = document.querySelector('.order-ui');
let orderUIs = orderUI.querySelectorAll('.order-ui__wrapper');
let arrowClass = 'order-ui__dropdown-arrow';
let arrowActiveClass = 'order-ui__dropdown-arrow--active';


orderUIs.forEach(function(element){
    let arrow = element.querySelector('.' + arrowClass);
    if (arrow) {
        element.addEventListener('click', function() {
            arrow.classList.add(arrowActiveClass);
        })
    }
});

document.addEventListener('click', function(evt) {
    if (!orderUI.contains(evt.target)) {
        orderUIs.forEach(function (element) {
            let arrow = element.querySelector('.' + arrowClass);
            if (arrow) {arrow.classList.remove(arrowActiveClass)}
        })
    }
});
