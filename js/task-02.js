const ingredients = [
  
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arr = [];
(function createElements(){
  ingredients.forEach(element => {  
  const liEl = document.createElement("li");
  liEl.textContent = element;
  liEl.classList.add("item");
  arr.push(liEl);
  });
})();
document.querySelector("#ingredients").append(...arr);

