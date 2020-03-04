"use strict";
let orderCallForm = document.querySelector('.callback-form');

const submitBtnCls = 'callback-form__submit',
    phoneVldErrOC = 'callback-form__input-wrapper--vld-err',
    phoneElCls = 'callback-form__tel',
    nameElCls = 'callback-form__name',
    successCls = 'callback-form__success',
    errorCls = 'callback-form__error',
    loadingCls = 'callback-form__loading',
    phoneErrMsg = 'Введите номер телефона',
    xmlhttpUrlOC = 'http://forrestmix.zzyzx.ru/api/callback/add/';

let xhrOC = new XMLHttpRequest();

(function() {
    scrollTo();
})();

function scrollTo() {
    const links = document.querySelectorAll('.menu-fixed__order-call-btn');
    links.forEach(each => (each.onclick = scrollAnchors));
}
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
        parent = phoneEl.parentElement,
        numbers = /^[-+]?[0-9 ]+$/;
    if(phone.match(numbers)) {
        parent.classList.remove(phoneValidationErr);
        return phone
    } else {
        parent.classList.add(phoneValidationErr);
        phoneEl.value = "";
        phoneEl.placeholder = phoneErrMsg;
        return false
    }
}

console.log(orderCallForm);
let submitOrderCall = orderCallForm.querySelector('.' + submitBtnCls),
    phoneElOC = orderCallForm.querySelector('.' + phoneElCls),
    nameElOC = orderCallForm.querySelector('.' + nameElCls);
submitOrderCall.addEventListener('click', function(){
    let name = nameElOC.value,
        phone = validatePhone(phoneElOC);
    if (phone) {
        let data = {
            code: info.type,
            phone: phone + name
        };
        xhrOC.send(JSON.stringify(data));
    }
});
