import { useState } from "react";
import { useEffect } from "react";
import miniI from '../img/miniIcon.png';
import likeI from '../img/like.png';
import disLikeI from '../img/dislike.png';



export const Header = ({ active, setActive,
  setEmail, setPassword, setEmailError, setPasswordError }) => {

  const [number, setNumber] = useState(0);
  const [likes, setLikes] = useState(localStorage.getItem('likes'));
  const [disLikes, setDisLikes] = useState(localStorage.getItem('disLikes'));

  // Функция обработчиков нажатия на кнопки, меняет видимость компонентов
  //Отправляет данные на сервер для подсчета попыток верификации
  const toggleModal = () => {
    setActive(!active)
    let login = { number };
    setNumber(number + 1);
    setEmail('');
    setPassword('');
    setPasswordError('');
    setEmailError('');
    fetch('http://localhost:8000/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login)
    })
  }

  //Функция обработки количества лайков, в данном случае решил не отправлять 
  // их на сервер чтобы избежать путаницы, т.к. счетчик лайков не был необходим 
  // сохраняю их в localStorage
  const likesCheck = () => {
    let ifLikesExist = localStorage.getItem('likes');
    if (ifLikesExist) {
      ifLikesExist = parseInt(ifLikesExist);
      localStorage.setItem('likes', ifLikesExist += 1)
    }
    else {
      localStorage.setItem('likes', 0)
    }
    setLikes(localStorage.getItem('likes'))
  }

  // По аналогии с лайками 
  const disLikesCheck = () => {
    let ifDisLikesExist = localStorage.getItem('disLikes');
    if (ifDisLikesExist) {
      ifDisLikesExist = parseInt(ifDisLikesExist);
      localStorage.setItem('disLikes', ifDisLikesExist += 1)
    }
    else {
      localStorage.setItem('disLikes', 0)
    }
    setDisLikes(localStorage.getItem('disLikes'))
  }

  return <>
    <header className="header">
      <h4>Personal account</h4>
    </header>
    <section className="buttonArea">
      <div onClick={e => e.stopPropagation()} className="buttonContainer">
        <button onClick={toggleModal} className="login">
          <img className="miniIcon" src={miniI} alt="none" />
          <p>Login</p>
        </button>
        <button onClick={likesCheck} className="like" value="0">
          <img className="likeI" src={likeI} alt="none" />
          <p className="likeValue">{likes}</p>
        </button>
        <button onClick={disLikesCheck} className="like_dislike" value="0">
          <img className="disLikeI" src={disLikeI} alt="none" />
          <p className="dislikeValue">{disLikes}</p>
        </button>
      </div>
    </section>
  </>
}