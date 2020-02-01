'use strict';

function toggleClass(element, cls) {
    element.classList.toggle(cls);
}

let mainMenu = document.querySelector('.main-menu__list');
let navicon = document.querySelector('#nav-icon');
let naviconCls = 'open';
let mainMenuCls = 'main-menu__list--active';
navicon.addEventListener('click', function(){
    this.classList.toggle(naviconCls);
    mainMenu.classList.toggle(mainMenuCls);
    document.addEventListener('mousedown', function menuClose(evt) {
        if (!mainMenu.contains(evt.target) && !navicon.contains(evt.target)) {
            mainMenu.classList.remove(mainMenuCls);
            navicon.classList.toggle(naviconCls);
            document.removeEventListener('mousedown', menuClose);
        }
    });
});


// type replacement for mobile/desktop date
// $('input[type="date"]').attr('type','text');
