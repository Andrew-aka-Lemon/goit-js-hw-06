function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elemRefs = {
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  numberOfNewElems: document.querySelector('#controls > input'),
  mainBox: document.querySelector('#boxes'),
};

elemRefs.createBtn.addEventListener('click', getNumber);
elemRefs.destroyBtn.addEventListener('click', destroyBoxes);

function getNumber() {
  const boxesAmount = Number(elemRefs.numberOfNewElems.value);
  createBoxes(boxesAmount);
}

function createBoxes(amount) {
  const arr = [];

  for (let index = 0; index < amount; index += 1) {
    const newBox = document.createElement('div');
    const divSideIncrement = index * 10;

    newBox.style.width = `${30 + divSideIncrement}px`;
    newBox.style.height = `${30 + divSideIncrement}px`;

    do {
      newBox.style.backgroundColor = getRandomHexColor();
    } while (newBox.style.backgroundColor.length < 7);

    newBox.classList.add('new-box');

    arr.push(newBox);
  }
  elemRefs.mainBox.append(...arr);
}

function destroyBoxes() {
  elemRefs.mainBox.innerHTML = '';
  elemRefs.numberOfNewElems.value = 0;
}
