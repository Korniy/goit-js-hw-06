// // Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color')

// buttonEl.addEventListener('click', () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   spanEl.textContent = getRandomHexColor();
// })

buttonEl.addEventListener('click', () => {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  spanEl.textContent = hexColor;
  
})
