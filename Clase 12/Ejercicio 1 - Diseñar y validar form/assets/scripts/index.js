window.addEventListener('DOMContentLoaded', () => {
  const formRegister = document.querySelector('.form');
  const inputs = document.querySelectorAll('.form [required]');
  console.log(inputs);

  inputs.forEach((input) => {
    const span = document.createElement('span');
    span.id = input.name;
    span.textContent = input.title;
    span.classList.add('form-error', 'none');
    input.insertAdjacentElement('afterend', span);
  });

  const repeatPassword = document.getElementById('repeatPassword');

  const repeatPasswordError = document.createElement('span');
  repeatPasswordError.textContent = 'Las contraseñas no coinciden';
  repeatPasswordError.classList.add('form-error', 'none');
  repeatPassword.insertAdjacentElement('afterend', repeatPasswordError);

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const repeatPasswordValue = repeatPassword.value;

    if (password !== repeatPasswordValue) {
      repeatPasswordError.classList.remove('none');
      return;
    }
    formRegister.reset();
  });

  repeatPassword.addEventListener('input', () => {
    repeatPasswordError.classList.add('none');
  });
});

document.addEventListener('keyup', (e) => {
  if (e.target.matches('.form [required]')) {
    let input = e.target,
      pattern = input.getAttribute('pattern');

    if (pattern && input.value !== '') {
      let regex = new RegExp(pattern);
      return !regex.exec(input.value)
        ? document.getElementById(input.name).classList.add('is-active')
        : document.getElementById(input.name).classList.remove('is-active');
    }
  }
});
