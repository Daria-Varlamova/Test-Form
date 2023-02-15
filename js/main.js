const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const PHONE_REGEXP =
  /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function isPhoneValid(value) {
  return PHONE_REGEXP.test(value);
}

const form = document.querySelector('.form-js');
const btnSubmit = form.querySelector('.btn-js');

function emailValidateInit() {
  const emailInput = document.querySelector('.input-js');

  emailInput.addEventListener('focus', () => {
    if (emailInput.parentElement.classList.contains('input-erorr')) {
      emailInput.parentElement.classList.remove('input-erorr');
    }
  });

  emailInput.addEventListener('blur', (event) => {
    const value = event.target.value;

    if (!value || isEmailValid(value)) {
      emailInput.parentElement.classList.remove('input-erorr');
      btnSubmit.disabled = false;
    } else {
      emailInput.parentElement.classList.add('input-erorr');
      btnSubmit.disabled = true;
    }
  });
}

emailValidateInit();

function phoneValidateInit() {
  const inputPhone = document.querySelector('.telmask');

  inputPhone.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
  });

  inputPhone.addEventListener('blur', (event) => {
    
    if (!event.target.value || isPhoneValid(event.target.value)) {
      inputPhone.parentElement.classList.remove('input-erorr');
      btnSubmit.disabled = false;
    } else {
      inputPhone.parentElement.classList.add('input-erorr');
      btnSubmit.disabled = true;
    }
  });

  inputPhone.addEventListener('focus', (event) => {
    if (inputPhone.parentElement.classList.contains('input-erorr')) {
      inputPhone.parentElement.classList.remove('input-erorr');
      btnSubmit.disabled = true;
    }
  });
}

phoneValidateInit();
