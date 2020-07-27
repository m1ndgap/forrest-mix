"use strict";

let popupAlert = document.querySelector('.alert-popup'),
    alertClose = popupAlert.querySelector('.alert-popup__close'),
    alertHash = popupAlert.dataset.hash,
    alertTime = popupAlert.dataset.timeout;

console.log(alertHash);

let showAlert = function(bool = true) {
    if (bool) {
        window.timeout = setTimeout(function () {
            popupAlert.classList.add('alert-popup--active')
        }, 1000)
    } else {
        popupAlert.classList.remove('alert-popup--active')
    }
};

let checkCookieMatch = function() {
    let cookieStr = 'alertHash=' + alertHash;
    return !!document.cookie.split(';').filter(function (item) {
        return item.indexOf(cookieStr) >= 0
    }).length;
};

let checkCookieExists = function() {
    return !!document.cookie.split(';').filter(function (item) {
        return item.trim().indexOf('alertHash=') == 0
    }).length;
};

let createCookie = function() {
    document.cookie = `alertHash=${alertHash};max-age=${alertTime*3600}`;
};


window.addEventListener('load', function () {
    if (checkCookieExists()) {
        console.log("cookie exists");
        if (!checkCookieMatch()) {
            console.log("cookies dont match");
            createCookie();
            showAlert();
        } else {
            console.log("cookies match");
        }
    } else {
        console.log("cookie exists");
        createCookie();
        showAlert();
    }

});

alertClose.addEventListener('click', function () {
    showAlert(false);
});

let cookies = document.cookie;
console.log(cookies);





