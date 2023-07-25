import { UseFetch } from "./useFetch";


//Компонент с счетчиками, данные хранятся на сервере и мы можем по-разному их обрабатывать
//В данном случае я их закомментил, т.к вариации обработки могут быть различными 
// Использовал кастомный хук UseFetch для отправки get запроса на сервер 
export function Counters() {

  const { data: submits } = UseFetch('http://localhost:8000/users');

  // console.log(submits)



  const { data: login } = UseFetch('http://localhost:8000/login');
  // login.forEach(element => {
  //   console.log(element.id)
  // });
  // console.log(login)

  // console.log(`Успешные авторизации: ${submits.length}, Неуспешные авторизации: ${login.length - submits.length}`)

  return <>
  </>
}