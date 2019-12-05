'use strict';

function toggleClass(element, cls) {
    element.classList.toggle(cls);
}

let bookBtn = document.querySelector('.js-bookbtn');
let bookBtnClass = 'main-menu__bookbtn--active';

let waypoint = new Waypoint({
    element: document.querySelector('.slides'),
    handler: function(direction) {
        toggleClass(bookBtn, bookBtnClass);

    },
    offset: function() {
        return -this.element.clientHeight
    }
});


// type replacement for mobile/desktop date
// $('input[type="date"]').attr('type','text');
