const navEl = document.querySelector("#categories");
const numberElements = navEl.childElementCount;
console.log(`Number of categories: ${numberElements}`);

const elementView = (category, elements) => {
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
};

const arrayOfLi = [...navEl.children];

arrayOfLi.forEach((el) =>
  elementView(
    el.firstElementChild.textContent,
    el.lastElementChild.childElementCount
  )
);
