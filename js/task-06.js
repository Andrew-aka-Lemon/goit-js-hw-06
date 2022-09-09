const inputRef = document.querySelector('#validation-input');
// console.log(inputRef.dataset.length);

inputRef.addEventListener('input', inputLengthChecker);

function inputLengthChecker(elem) {
  if (elem.currentTarget.value.length >= 0 && elem.currentTarget.value.length < 6) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
    return;
  }
  inputRef.classList.add('valid');
  inputRef.classList.remove('invalid');

  console.log(elem.currentTarget.value.length);
}
