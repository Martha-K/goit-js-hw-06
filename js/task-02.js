const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach((el) => {
  const liElement = document.createElement("li");
  liElement.appendChild(document.createTextNode(el));
  liElement.classList.add("item");
  ingredientsList.appendChild(liElement);
});
