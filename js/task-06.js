const inputRef = document.querySelector('#validation-input');
// console.log(inputRef.dataset.length);

inputRef.addEventListener('input', inputLengthChecker);

function inputLengthChecker(event) {
  if (event.currentTarget.value.length === 6) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
    return;
  }
  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid');

  console.log(event.currentTarget.value.length);
}
