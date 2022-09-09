const inputRef = document.querySelector('.login-form');

let formData = {};

inputRef.addEventListener('submit', dataCollector);

function dataCollector(event) {
  event.preventDefault();

  const userPass = event.currentTarget.elements.password.value;
  const userEmail = event.currentTarget.elements.email.value;

  if (userEmail === '' || userPass === '') {
    window.alert('Всі поля повинні бути заповнені');
    return;
  }

  formData = {
    userEmail,
    userPass,
  };

  console.log(formData);

  event.currentTarget.reset();
}
