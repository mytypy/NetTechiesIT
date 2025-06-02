import { use, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import DataForm from './loginData';
import Button from '../../utils/button/button';
import { login } from '../../requests/login/login'


export default function Login() {
  const [formData, setData] = useState({
    'email': '',
    'password': ''
    })
  
  const [formError, setError] = useState({
    'password': ''
  })

  async function sendForm(e) { // Функция входа
    e.preventDefault()
    const requestLogin = await login(formData)

    if (requestLogin.status != 200) {

      const resp = requestLogin.resp.response
      setError(() => ({
        'password': resp.data.non_field_errors[0]
      }))

    } else {

      console.log('Логин прошел успешно!')
      setError({'password': ''})
    }
  }

  function changeValue(e) { // Меняем форму и работаем с предыдущим занчением
    const {id, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }))
  }
  
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <h2 className={styles.heading}>Вход</h2>
        <form onSubmit={sendForm}>
          {
          DataForm.map(({num , type, id, placeholder, htmlFor, message}) => (
            <div className={styles.formGroup} key={num}>
              <label htmlFor={htmlFor} className={styles.label}>{message}</label>
              <input type={type}
               id={id}
                placeholder={placeholder}
                 required className={styles.input}
                  value={formData[id] ?? ''}
                  onChange={changeValue}/>
                <div className={styles.errorMessage} id="password-error">{formError[id]}</div>
            </div>
            
          ))
        }
          <Button type='submit' className={styles.loginBtn}>Войти</Button>
        </form>
        <div className={styles.bottomText}>
          Нет аккаунта? <Link to="/registration" className={styles.link}>Регистрация</Link>
        </div>
      </div>
    </div>
  );
}