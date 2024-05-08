const refs = {
  input: document.getElementById('name-input'),
  spanText: document.getElementById('name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.spanText.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    refs.spanText.textContent = 'Anonymous';
  }
}
