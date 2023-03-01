const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
let arrayEl = [];
ingredients.forEach((el) => {
  const liElement = document.createElement("li");
  liElement.appendChild(document.createTextNode(el));
  liElement.classList.add("item");
  arrayEl.push(liElement);
});

ingredientsList.append(...arrayEl);
