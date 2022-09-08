const decrementBtnRef = document.querySelector(`button[data-action="decrement"]`);
const incrementBtnRef = document.querySelector(`button[data-action="increment"]`);
const amountRef = document.querySelector('#value');
// console.log(typeof amountRef.textContent);

amountRef.textContent = 0;

// console.log(typeof amountRef.textContent);

const incrementAmount = () => {
  amountRef.textContent = Number(amountRef.textContent) + 1;
};

const decrementAmount = () => {
  amountRef.textContent = Number(amountRef.textContent) - 1;
};

incrementBtnRef.addEventListener('click', incrementAmount);
decrementBtnRef.addEventListener('click', decrementAmount);
