const inputRef = document.querySelector('.login-form');

let formData = {};

inputRef.addEventListener('submit', dataCollector);

function dataCollector(event) {
  event.preventDefault();

  const userPass = event.currentTarget.elements.password.value;
  const userLogin = event.currentTarget.elements.email.value;

  if (userLogin === '' || userPass === '') {
    window.alert('Всі поля повинні бути заповнені');
  }

  formData = {
    userLogin,
    userPass,
  };

  console.log(formData);

  event.currentTarget.reset();
}
