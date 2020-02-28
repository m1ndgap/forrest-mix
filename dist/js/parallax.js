"use strict";

let sectionHeight = 610; // height of an area text floats within
let cursives = document.querySelectorAll('.main-card__cursive-aside');

cursives.forEach(function(el){
    let textEl = el.querySelector('.cursive-aside-title');
    let height = textEl.clientWidth;
    console.log(textEl);
    let waypoint = new Waypoint({
        element: el,
        handler: function(direction) {
            console.log(el);
            console.log("trigger");
        },
        offset: height*3
    });
    let waypoint2 = new Waypoint({
        element: el,
        handler: function(direction) {
            console.log(el);
            console.log("trigger2");
        },
        offset: -height*3
    });
});


