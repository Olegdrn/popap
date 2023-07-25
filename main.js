//константы отдельных элементов в DOM 
const block = document.querySelector(".registrationField");
const visibility = document.querySelector(".visible");
const like = document.querySelector(".like");
const dislike = document.querySelector(".like_dislike");
const disLikeValue = document.querySelector(".dislikeValue");
const likeValue = document.querySelector(".likeValue");


//Функции изменения видимости классов 
function open() {
  block.classList.add("visible");
}

function close() {
  block.classList.remove("visible");
  document.querySelector(".inputEmail").classList.remove("inputError");
  document.querySelector(".inputPassword").classList.remove("inputError");
  document.querySelector('.ErrorEP').classList.remove('visible');
  document.querySelector('.ErrorP').classList.remove('visible');
  document.querySelector('.ErrorES').classList.remove('visible');
  document.querySelector('.ErrorE').classList.remove('visible');
  setTimeout(() => {
    document.querySelector('.success').classList.remove('visible')
  }, 3000);

}

//Счетчик нажатия кнопки открытия формы, данные хранятся в localStorage
//Открытие окна регистрации по клику на login 
document.querySelector(".login").addEventListener('click', () => {
  open()
  let ifLoginsExist = localStorage.getItem('login');
  if (ifLoginsExist) {
    ifLoginsExist = parseInt(ifLoginsExist);
    localStorage.setItem('login', ifLoginsExist += 1)
  }
  else {
    localStorage.setItem('login', 0)
  }
});

//Закрытие по нажатию на крестик 
document.querySelector(".crossImg").addEventListener('click', () => {
  close();
});

//Закрытие по нажатию вне модального окна
document.querySelector(".registration").addEventListener('click', (e) => {
  const incl = e.composedPath().includes(document.querySelector(".registrationField"));
  if (!incl) {
    close()
  }
})

//Закрытие по нажатию на клавишу ESC
window.addEventListener('keydown', (e) => {
  if (e.keyCode == 27) {
    block.classList.remove('visible')
  }
});

//Счетчик лайков, данные хранятся в localStorage
likeValue.textContent = localStorage.getItem('likes');

like.addEventListener('click', () => {
  let ifLikesExist = localStorage.getItem('likes');
  if (ifLikesExist) {
    ifLikesExist = parseInt(ifLikesExist);
    localStorage.setItem('likes', ifLikesExist += 1)
  }
  else {
    localStorage.setItem('likes', 0)
  }
  likeValue.textContent = localStorage.getItem('likes');
})

//Счетчик дизлайков, данные хранятся в localStorage
disLikeValue.textContent = localStorage.getItem('disLikes');
dislike.addEventListener('click', () => {
  let ifDisLikesExist = localStorage.getItem('disLikes');
  if (ifDisLikesExist) {
    ifDisLikesExist = parseInt(ifDisLikesExist);
    localStorage.setItem('disLikes', ifDisLikesExist += 1)
  }
  else {
    localStorage.setItem('disLikes', 0)
  }
  disLikeValue.textContent = localStorage.getItem('disLikes');
})

//Расчет неудачных авторизаций
const nonSuccessSubmits = parseInt(localStorage.getItem('login')) -
  parseInt(localStorage.getItem('Submit'));

localStorage.setItem('successSubmits', nonSuccessSubmits);
