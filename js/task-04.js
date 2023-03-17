// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const result = document.querySelector("#value");

let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", (ev) => {
  result.textContent = counterValue -= 1;
});

incrementButton.addEventListener("click", (ev) => {
  result.textContent = counterValue += 1;
});
