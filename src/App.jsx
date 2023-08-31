import { useContext, createContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import { Form } from './components/form';
import { Header } from './components/header';
import { Success } from './components/success';
import { Counters } from './components/counters';
export const MyContext = createContext({})


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
    <MyContext.Provider value={{
      email, setEmail, password, setPassword, emailError, setEmailError, passwordError,
      setPasswordError, modalActive, setModalActive, successActive, setSuccessActive
    }}>
      <div onClick={() => setModalActive(false)} className="App container">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header />} />
          </Routes>
          <Routes>
            <Route path='/' element={<Form />} />
          </Routes>
          <Routes>
            <Route path='/' element={<Success />} />
          </Routes>
          <Routes>
            <Route path='/counters' element={<Counters />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;
