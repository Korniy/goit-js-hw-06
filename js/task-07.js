const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener("input", function (event) {
    spanEl.style.fontSize = event.currentTarget.value + "px";
});

  






