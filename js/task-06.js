const inputEl = document.querySelector('#validation-input');
const checkSymbol = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', function (event) {

    if (event.currentTarget.value.length === checkSymbol) {

        inputEl.classList.remove('invalid');
        return inputEl.classList.add('valid');
    }
        inputEl.classList.remove('valid');
        return inputEl.classList.add('invalid');
});


































