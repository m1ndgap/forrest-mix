"use strict";

let bookBtn = document.querySelector('.js-bookbtn');
let bookBtnClass = 'main-menu__bookbtn--active';
let wpBookEl = document.querySelector('.slides');
bookBtn.classList.remove(bookBtnClass);
if (wpBookEl) {
    let waypoint = new Waypoint({
        element: document.querySelector('.slides'),
        handler: function(direction) {
            bookBtn.classList.toggle(bookBtnClass);
        },
        offset: function() {
            return -this.element.clientHeight
        }
    });
}
