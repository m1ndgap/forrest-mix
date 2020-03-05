"use strict";
let orderCallForm = document.querySelector('.callback-form');

const submitBtnCls = 'callback-form__submit',
    phoneVldErrOC = 'callback-form__input-wrapper--vld-err',
    phoneElCls = 'callback-form__tel',
    nameElCls = 'callback-form__name',
    successCls = 'callback-form__success',
    errorCls = 'callback-form__error',
    loadingCls = 'callback-form__loading',
    phoneErrMsgOC = 'Введите номер телефона',
    xmlhttpUrlOC = 'http://forrestmix.zzyzx.ru/api/callback/add/';

let xhrOC = new XMLHttpRequest();


function getToken(){
    let token = document.querySelector('[name=csrfmiddlewaretoken]');
    if (token) {
        return token.value
    } else {
        return false
    }
}

function openXHR(xhr, url){
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    let csrftoken = getToken();
    if (csrftoken){
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
    }
}

(function scrollTo() {
    const links = document.querySelectorAll('.menu-fixed__order-call-btn');
    links.forEach(each => (each.onclick = scrollAnchors));
})();
function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

function toggleVisualState(el, cls, bool = true) {
    if (bool) {
        el.classList.add(cls + '--active')
    } else {
        el.classList.remove(cls + '--active')
    }
}

function validatePhone(phoneEl) {
    let phone = phoneEl.value,
        parent = phoneEl.closest('div'),
        numbers = /^[-+]?[0-9 ]+$/;
    if(phone.match(numbers)) {
        parent.classList.remove(phoneVldErrOC);
        return phone
    } else {
        parent.classList.add(phoneVldErrOC);
        phoneEl.value = "";
        phoneEl.placeholder = phoneErrMsgOC;
        return false
    }
}

let submitOrderCall = orderCallForm.querySelector('.' + submitBtnCls),
    phoneElOC = orderCallForm.querySelector('.' + phoneElCls),
    nameElOC = orderCallForm.querySelector('.' + nameElCls),
    loadingDOMOC = orderCallForm.querySelector('.' + loadingCls),
    successDOMOC = orderCallForm.querySelector('.' + successCls),
    errorDOMOC = orderCallForm.querySelector('.' + errorCls);

submitOrderCall.addEventListener('click', function(evt){
    evt.preventDefault();
    let name = nameElOC.value,
        phone = validatePhone(phoneElOC);
    if (phone) {
        let data = {
            code: 'callback',
            phone: phone + ' ' + ' ' + name
        };
        console.log(data);
        openXHR(xhrOC, xmlhttpUrlOC);
        xhrOC.send(JSON.stringify(data));
    }
});

xhrOC.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log("DONE");
        console.log("if " + this.readyState + " " + this.status);
        let timeOut = window.setTimeout(function() {
            toggleVisualState(loadingDOMOC, loadingCls, false);
            toggleVisualState(successDOMOC, successCls);
        }, 300);
    } else if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {
        let timeOut = window.setTimeout(function() {
            toggleVisualState(loadingDOMOC, loadingCls, false);
            toggleVisualState(errorDOMOC, errorCls);
        }, 300);
    }
};
