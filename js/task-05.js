const inputRef = document.querySelector('#name-input');
const greetingsRef = document.querySelector('#name-output');

// inputRef.addEventListener('blur', inputReader);

inputRef.addEventListener('input', inputReader);

function inputReader(elem) {
  const qwe = elem.currentTarget.value;
  greetingChangeText(qwe);
}

function greetingChangeText(text) {
  console.log(text);
  if (text === '') {
    greetingsRef.textContent = 'Anonymous';
    return;
  }
  greetingsRef.textContent = text;
}
