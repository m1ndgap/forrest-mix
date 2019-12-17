"use strict";


let collapsable = document.querySelectorAll('.collapsable');
let collapsableItemClass = 'collapsable__list-item--collapsable';
let listItemClass = 'collapsable__list-item';
let collapsableButton = 'collapsable__button';

collapsable.forEach(function (el) {
    let listItems = el.querySelectorAll('.' + collapsableItemClass);
    let button = el.parentNode.querySelector('.' + collapsableButton);
    let arrow = button.querySelector('svg');
    console.log(button);
    listItems.forEach(function(elem){
        elem.classList.toggle(listItemClass + '--hidden');
    });
    button.addEventListener('click', function(){
        listItems.forEach(function(elem){
            elem.classList.toggle(listItemClass + '--hidden');
        });
        button.classList.toggle(collapsableButton + '--active');
    }, false)
});


