const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
const products = ingredients.map((product) => {
  const item = document.createElement("li");
  item.textContent = product;
  item.classList.add("item");
  return item;
});

ul.append(...products);

// Получаю доступ к ul/
