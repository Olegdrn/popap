import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import { Form } from './components/form';
import { Header } from './components/header';
import { Success } from './components/success';
import { Counters } from './components/counters'

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [successActive, setSuccessActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('This field is required');
  const [passwordError, setPasswordError] = useState('This field is required');

  //Рендерим компоненты и прокидываем пропсы, пропсов много, т.к. многие 
  //переменные используются во всех компонентах, по-хорошему, для верификации 
  //достаточно одного компонента, в этом случае пропсы не пришлось бы прокидывать
  //для наглядности я создал несколько компонентов, чтобы показать преимущества react

  return (
    <div onClick={() => setModalActive(false)} className="App container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header active={modalActive} setActive={setModalActive}
            setEmail={setEmail} setPassword={setPassword}
            setEmailError={setEmailError} setPasswordError={setPasswordError}
          />} />
          <Route path='/form' element={<Form active={modalActive} setActive={setModalActive} setSuccessActive={setSuccessActive}
            email={email} setEmail={setEmail} password={password} setPassword={setPassword}
            emailError={emailError} setEmailError={setEmailError}
            passwordError={passwordError} setPasswordError={setPasswordError}
          />} />
          <Route path='/' element={<Success successActive={successActive} />} />
        </Routes>
        <Routes>
          <Route path='/counters' element={<Counters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
