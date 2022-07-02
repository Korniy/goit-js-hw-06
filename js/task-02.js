const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const createList = ingredients.map(item => {
  const liEl = document.createElement('li');
  liEl.textContent = item;
  liEl.classList.add('item');
  return liEl;
});
listEl.append(...createList);


// const listEl = document.querySelector("#ingredients");

// const firstItem = document.createElement("li");
// firstItem.textContent = 'Potatoes';
// firstItem.classList = "item";

// const SecondItem = document.createElement("li");
// SecondItem.textContent = 'Mushrooms';
// SecondItem.classList = "item";

// const thirdItem = document.createElement("li");
// thirdItem.textContent = "Garlic";
// thirdItem.classList = "item";

// const fourthItem = document.createElement("li");
// fourthItem.textContent = "Tomatos";
// fourthItem.classList = "item";

// const fifthItem = document.createElement("li");
// fifthItem.textContent = "Herbs";
// fifthItem.classList = "item";

// const sixItem = document.createElement("li");
// sixItem.textContent = "Condiments";
// sixItem.classList = "item";

// body.append(firstItem, SecondItem, thirdItem, fourthItem, fifthItem, sixItem);



// const createElement = (ingredients) => ingredients.reduce((acc, ingredient) => acc + `<li>${ingredient}</li>`, "")
//   ;

// const listEl = document.querySelector('#ingredients');
// listEl.insertAdjacentHTML("beforeend", createElement(ingredients));

// const itemEl = document.querySelector("li");
// itemEl.classList = "item";

