const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

// console.log(fontSizeControl.value);
fontSizeControl.addEventListener('input', () => {
  //   console.log(fontSizeControl.value);
  const fontSize = fontSizeControl.value + 'px';
  textSpan.style.fontSize = fontSize;
});
