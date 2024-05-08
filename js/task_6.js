const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
  const inputValueLength = input.value.length.toString();
  const validLength = input.getAttribute('data-length');

  if (inputValueLength === validLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
