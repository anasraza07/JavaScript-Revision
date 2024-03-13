const buttonElement = document.querySelector('.js-button');
console.log(buttonElement.classList.contains('js-button'));

function onOffButton(className) {
    const onOffButtonElem = document.querySelector(`.${className}`);
    // console.log(gamingButtonElem);

    if (!onOffButtonElem.classList.contains('is-toggled')) {
        onOffButtonElem.classList.add('is-toggled');
    } else {
        onOffButtonElem.classList.remove('is-toggled');
    };
};