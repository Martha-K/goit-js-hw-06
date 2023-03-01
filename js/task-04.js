let counterValue = 0;

const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

refs.buttonDecrement.addEventListener("click", subtractionValue);
refs.buttonIncrement.addEventListener("click", addingValue);

function subtractionValue() {
  counterValue -= 1;
  countsValueCounter();
}

function addingValue() {
  counterValue += 1;
  countsValueCounter();
}

function countsValueCounter() {
  refs.counter.textContent = counterValue;
}
