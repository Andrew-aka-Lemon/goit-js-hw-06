const inputRef = document.querySelector('#font-size-control');
const textToResizeRef = document.querySelector('#text');

inputRef.addEventListener('input', fontResizer);

function fontResizer(elem) {
  textToResizeRef.style.fontSize = `${elem.currentTarget.value}px`;
}
