
// 1

const listEl = document.querySelector("#categories");
const numberOfElements = listEl.children.length;
console.log("Number of categories:", numberOfElements);

// 2

const itemEl = document.querySelectorAll('.item');
itemEl.forEach.call(itemEl, (element) => {
    const titleEl = element.querySelector('h2').innerHTML;
    console.log("Category:", titleEl);
    
    const itemsLength = element.querySelectorAll('li').length;
    console.log("Elements:",itemsLength )
    
});





































