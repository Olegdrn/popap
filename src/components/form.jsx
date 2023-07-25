import { useState } from "react";
import { useEffect } from "react";
import miniI from '../img/miniIcon.png';
import crossI from '../img/cross.png';
import pointI from "../img/point.png"


export function Form({ active, setActive, setSuccessActive,
  email, setEmail, password, setPassword,
  emailError, setEmailError,
  passwordError, setPasswordError }) {
  const [formValid, setFormValid] = useState(false);
  const [basicErrorE, setBasicErrorE] = useState(false);
  const [basicErrorP, setBasicErrorP] = useState(false);

  // Функция, которая будет вызываться по клику на кнопки открывания и закрывания 
  // Модального окна и менять его статус на противоположный 
  const toggleModal = () => {
    setActive(!active)
  }

  //Обработчик ошибок: Если ввод валиден, то ошибок нет 
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }

  }, [emailError, passwordError])

  //Валидация поля Email
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Not valid E-mail address')
      if (!e.target.value) {
        setEmailError('This field is required')
      }
    } else {
      setEmailError('');
      setBasicErrorE(true);
    }
  }

  //Валидация поля Password
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Wrong password')
      if (!e.target.value) {
        setPasswordError('This field is required')
      }
    } else {
      setPasswordError('')
      setBasicErrorP(true);
    }
  }



  //Функция события submit при валидной форме
  //Отправляет POST запрос на сервер с данными из формы и скрывает ее 
  const hadleSubmit = (e) => {
    e.preventDefault();
    const users = { email, password };
    fetch('http://localhost:8000/users', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users)
    })
    toggleModal();
    setEmail('');
    setPassword('');
    setActive(false);
    setSuccessActive(true);
    setFormValid(false)
    setTimeout(() => {
      setSuccessActive(false)
    }, 3000);
  }
  return <>
    <section className="registration" >
      <div onClick={e => e.stopPropagation()} className={active ? "registrationField" : "registrationField invisible"}>
        <div className="registrationImgArea">
          <img className="registrationImg" src={miniI} alt="none" />
        </div>
        <form className="mainForm" action="#" id="validForm" onSubmit={hadleSubmit}>
          <div onClick={toggleModal} className="crossImg"> <img src={crossI} alt="none" />
          </div>
          <p className="inputP">E-mail</p>
          <input onChange={e => emailHandler(e)} value={email}
            className={!emailError ? "inputEmail" : "inputEmail inputError"} name="email" id="email" />
          <p className="ErrorE">{emailError}</p>
          <div className="passwordArea">
            <p className="inputE">Password</p>
            <input onChange={e => passwordHandler(e)} className={!passwordError ? "inputPassword" : "inputPassword inputError"}
              type="password" name="password" id="password" value={password} />
            <p className="ErrorP">{passwordError}</p>
            <p className="adviceP">Please use 3-8 any characters</p>
          </div>
          <button disabled={!basicErrorE || !formValid || !basicErrorP} className="loginButton" type="submit" id="log-btn">Login</button>
          <div className="addOpt">
            <p className="addText">Forgot password?</p>
            <img className="oval" src={pointI} alt="none" />
            <p className="addText">User registration</p>
          </div>
        </form>
      </div>
    </section >
  </>
}