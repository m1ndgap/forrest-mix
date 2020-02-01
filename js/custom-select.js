let select = document.querySelectorAll('.cselect__wrap select');
let customText = '';
let extraDom = '';
let modalButtons = document.querySelectorAll("[href='#book-modal']");

let optionsCls = 'cselect__options';
let optionsItem = 'cselect__list-item';
let optionsTextCls = 'cselect__item-text';
let mainSelectCls = 'cselect__styled';
let mainTextCls = 'cselect__text';

let viewportCS = document.body.clientWidth;

function updateSelect(select, value) {
    let options = Array.from(select[0].querySelectorAll("option"));
    let option = options.filter(opt => opt.getAttribute("value") == value);
    option[0].setAttribute("selected", '');
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

modalButtons.forEach(function (mbutton) {
    let selectOpt = mbutton.dataset.modalopt;
    console.log(selectOpt);
    mbutton.addEventListener('click', function(){
        updateSelect(select, selectOpt);
        drawCustomSelect();
    })
});
