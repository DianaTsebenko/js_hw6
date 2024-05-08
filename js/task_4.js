const valueText = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function updateCounter() {
  valueText.textContent = counterValue;
}

decrementBtn.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});

incrementBtn.addEventListener('click', () => {
  counterValue++;
  updateCounter();
});
