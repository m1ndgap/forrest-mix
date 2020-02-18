let select = document.querySelectorAll('.cselect__wrap select');
let customText = '';
let extraDom = '';


let optionsCls = 'cselect__options',
    optionsItem = 'cselect__list-item',
    optionsTextCls = 'cselect__item-text',
    mainSelectCls = 'cselect__styled',
    mainTextCls = 'cselect__text',
    phoneValidationErr = 'book-modal__form-input-wrap--vld-err',
    phoneErrMsg = 'Введите номер телефона',
    successClass = 'book-modal__success',
    loadingClass = 'book-modal__loading',
    xmlhttpUrl = 'http://forrestmix.zzyzx.ru/api/callback/add/';

let viewportCS = document.body.clientWidth;

window.location.hash = '';

let xhr = new XMLHttpRequest();

function updateSelect(select, value) {
    let options = Array.from(select[0].querySelectorAll("option"));
    let option = options.filter(opt => opt.getAttribute("value") == value);
    option[0].setAttribute("selected", '');
}

function updateTel(telEl, tel) {
    telEl.innerText = tel;
    telEl.setAttribute('href', 'tel:' + tel);
}

function updateEmail(emailEl, email) {
    emailEl.setAttribute("value", email);
}

function getCurrentData(select) {
    let selectEl = select[0];
    let option = selectEl.options[selectEl.selectedIndex];
    return {
        tel: option.dataset.tel,
        email: option.dataset.email,
        type: option.value
    };
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

function toggleSuccess(el, bool = true) {
    if (bool) {
        el.classList.add(successClass + '--active')
    } else {
        el.classList.remove(successClass + '--active')
    }
}

function toggleLoading(el, bool = true) {
    if (bool) {
        el.classList.add(loadingClass + '--active')
    } else {
        el.classList.remove(loadingClass + '--active')
    }
}

function drawCustomSelect() {
    if (viewportCS > 768) {
        let existingSelect = document.querySelector('.' + mainSelectCls);
        let existingOptions = document.querySelector('.' + optionsCls);
        if (existingSelect && existingOptions) {
            existingSelect.remove();
            existingOptions.remove();
        }
        select.forEach(function (elem) {
            let options = elem.querySelectorAll('option'),
                parent = elem.parentNode,
                selectStyled = document.createElement('div'),
                selectOptions = document.createElement('ul');
            selectStyled.classList.add(mainSelectCls);
            selectOptions.classList.add(optionsCls, optionsCls + '--hidden');

            options.forEach(function (opt) {
                let newLi = document.createElement('li');
                newLi.setAttribute('value', opt.value);
                newLi.classList.add(optionsItem);
                newLi.innerHTML = '<span class=' + optionsTextCls + '>' + opt.innerText + '</span>';
                selectOptions.append(newLi);
            });

            if (customText) {
                selectStyled.innerHTML = '<span class=' + mainTextCls + '>' + customText + '</span>';
            } else {
                selectStyled.innerHTML = '<span class=' + mainTextCls + '>' + options[elem.selectedIndex].innerText + '</span>';
            }

            elem.classList.add('cselect__hidden');
            parent.append(selectStyled);
            parent.append(selectOptions);

            selectStyled.addEventListener('click',function(){
                selectOptions.classList.toggle(optionsCls + '--hidden');
                this.classList.toggle(mainSelectCls + '--active');
            });

            let newOptions = selectOptions.querySelectorAll('.' + optionsItem);
            newOptions.forEach(function(nOpt){
                nOpt.addEventListener('click', function () {
                    let option = elem.querySelector('[value="'+ nOpt.getAttribute("value") + '"]');
                    let textVal = selectStyled.querySelector('.' + mainTextCls);
                    let newData = getCurrentData(select);
                    updateTel(phoneLink, newData.tel);
                    updateEmail(emailInput, newData.email);
                    options.forEach(function (optn) {
                        optn.removeAttribute('selected');
                    });
                    option.setAttribute('selected', '');
                    selectOptions.classList.toggle(optionsCls + '--hidden');
                    selectStyled.classList.toggle(mainSelectCls + '--active');
                    textVal.innerText = nOpt.innerText;
                })
            })
        });
    }
}



let modalButtons = document.querySelectorAll("[href='#book-modal']"),
    phoneLink = document.querySelector('.js-modal-phone'),
    emailInput = document.querySelector('.js-modal-email'),
    modalSubmit = document.querySelector('.js-book-modal-submit'),
    clientPhone = document.querySelector('.book-modal__input-tel'),
    successDOM = document.querySelector('.' + successClass),
    loadingDOM = document.querySelector('.' + loadingClass);

if (viewportCS <= 768) {
    select[0].addEventListener('change', function(){
        let data = getCurrentData(select);
        updateTel(phoneLink, data.tel)
    })
}

modalButtons.forEach(function (mbutton) {
    let selectOpt = mbutton.dataset.modalopt || 'rest';
    mbutton.addEventListener('click', function(){
        updateSelect(select, selectOpt);
        let info = getCurrentData(select);
        updateTel(phoneLink, info.tel);
        updateEmail(emailInput, info.email);
        xhr.open("POST", xmlhttpUrl, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        toggleLoading(loadingDOM, false);
        toggleSuccess(successDOM, false);
        drawCustomSelect();
    })
});

modalSubmit.addEventListener('click', function (evt) {
    evt.preventDefault();
    let info = getCurrentData(select);
    let phone = clientPhone.value;
    if (validatePhone(clientPhone)) {
        let data = {
            code: info.type,
            phone: phone
        };
        console.log(data);
        console.log(xhr);
        xhr.send(JSON.stringify(data+123123));
    }
});

xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log("DONE");
        let timeOut = window.setTimeout(function() {
            toggleLoading(loadingDOM, false);
            toggleSuccess(successDOM);
        }, 500);

    } else if (this.readyState !== XMLHttpRequest.DONE) {
        if ((this.status !== 200))
        console.log("LOADING " + this.status)
        toggleLoading(loadingDOM)
    } else if (this.status === 500) {
        console.log(this.readyState)
    }
};

// xhr.addEventListener('load', function() { // Call a function when the state changes.
//     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//         console.log(123)
//     } else if (this.readyState === XMLHttpRequest.LOADING) {
//         console.log(31212312)
//     }
// });
