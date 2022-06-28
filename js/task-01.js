
// 1

const listEl = document.querySelector("#categories");
const numberOfElements = listEl.children.length;
console.log("Numbers of categories:", numberOfElements);

// 2

const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach.call(itemsEl, (element) => {
    const titleEl = element.querySelector('h2').innerHTML;
    console.log("Category:", titleEl);
    
    const itemsLength = element.querySelectorAll('li').length;
    console.log("Elements:",itemsLength )
    
});





































