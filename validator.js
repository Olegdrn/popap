class Validator {
  constructor(form) {
    //Регулярные выражения для валидации Email и password, для password в итоге 
    //выбрал простое условие по длине для упрощения ввода 
    this.patterns = {
      emailCheck: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      // password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    };

    this.form = form;
    this.valid = false;
    this._validateForm();
  }

  //Валидация Email 
  validateEmail(email) {
    if (!this.patterns.emailCheck.test(email.value.toLowerCase())) {
      document.querySelector('.ErrorE').classList.remove('visible');
      email.classList.add('invalid');
      document.querySelector('.ErrorES').classList.add('visible');
      document.querySelector('.inputEmail').classList.add('inputError');

      if (email.value === '') {
        document.querySelector('.ErrorES').classList.remove('visible')
        email.classList.add('invalid');
        document.querySelector('.ErrorE').classList.add('visible');
        document.querySelector('.inputEmail').classList.add('inputError');
      }
    }

    else {
      document.querySelector('.ErrorES').classList.remove('visible');
      document.querySelector('.ErrorE').classList.remove('visible');
      email.classList.remove('invalid');
      document.querySelector('.inputEmail').classList.remove('inputError');
    }
  }

  //Валидация Password
  validatePassword(password) {

    if (password.value.length < 3 || password.value.length > 10) {
      document.querySelector('.ErrorP').classList.remove('visible');
      password.classList.add('invalid');
      document.querySelector('.ErrorEP').classList.add('visible');
      document.querySelector('.inputPassword').classList.add('inputError');

      if (password.value === '') {
        document.querySelector('.ErrorEP').classList.remove('visible')
        password.classList.add('invalid');
        document.querySelector('.ErrorP').classList.add('visible');
        document.querySelector('.inputPassword').classList.add('inputError');

      }
    }

    else {
      document.querySelector('.ErrorEP').classList.remove('visible');
      document.querySelector('.ErrorP').classList.remove('visible');
      password.classList.remove('invalid');
      document.querySelector('.inputPassword').classList.remove('inputError');
    }
  }

  //Поиск инпутов и вызов валидации для каждого из них 
  //Если валидация прошла успешно, то массив элементов с классом invalid будет пуст
  // и вернется false - форма будет валидна 
  _validateForm() {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    this.validateEmail(emailInput);
    this.validatePassword(passwordInput);

    if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length) {
      this.valid = true;
    }
  }
}


//Если форма валидна, то в localStorage будет направлен submit 
//Окно верификации закроется и откроется окно успешной авторизации
//После будет вызвана функция с setTimeout 3 сек, которая скроет окно авторизации
document.getElementById('validForm').addEventListener('submit', e => {
  let valid = new Validator('validForm');
  if (!valid.valid) {
    e.preventDefault();
  }
  if (valid.valid) {
    localStorage.getItem('Submit');
    let ifSubmitExist = localStorage.getItem('Submit');
    if (ifSubmitExist) {
      ifSubmitExist = parseInt(ifSubmitExist);
      localStorage.setItem('Submit', ifSubmitExist += 1)
    }
    else {
      localStorage.setItem('Submit', 0)
    }

    close();
    document.querySelector('.success').classList.add('visible');
  }
})
