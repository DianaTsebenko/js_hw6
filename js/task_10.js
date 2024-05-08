function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxContainer = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  const numberOfDiv = Number(input.value);
  //   console.log(numberOfDiv);
  CreateBoxes(numberOfDiv);
});

destroyBtn.addEventListener('click', destroyBoxes);

function CreateBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    size += 10;
    const randomColor = getRandomHexColor();

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = randomColor;

    boxContainer.append(box);
  }
}

function destroyBoxes() {
  boxContainer.innerHTML = '';
}
