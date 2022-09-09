function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const textOfColorRef = document.querySelector('.color');
const changeColorBtnRef = document.querySelector('.change-color');

function changeBodyColor() {
  const newColor = getRandomHexColor();
  bodyRef.style.backgroundColor = newColor;
  textOfColorRef.textContent = newColor;
}

changeColorBtnRef.addEventListener('click', changeBodyColor);
