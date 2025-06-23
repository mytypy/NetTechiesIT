import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './registration.module.css';
import dataForm from './registerData';
import Button from '../../utils/button/button';
import { registration } from '../../requests/registration/registartion'
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from "react-router-dom";


export default function Register() {
  const { setUser } = useUser()
  const navigate = useNavigate()
  
  const [formData, setData] = useState({
    'name': '',
    'tag': '',
    'email': '',
    'password': '',
    'password_repeat': ''
  })

  const [errorData, setError] = useState({
    'tag': '',
    'email': '',
    'password': '',
  })

  async function sendForm(e) {
    e.preventDefault()

    const sendData = { ...formData };
    delete sendData.password_repeat;

    const requestRegistration = await registration(sendData)

    if (requestRegistration.status != 201) {

      const errorRespData = requestRegistration.resp.response.data
      
      setError(errorRespData) // Ставим ошибки
    } else {
      navigate('/login')
    }
  }
  

  function changeValue (e) {
    const {id, value} = e.target

    setData((prevData) => ({
      ...prevData, 
      [id]: value
    }))
  }

  return (
    <div className={styles.registerWrapper}>
      <div className={styles.registerCard}>
        <h2 className={styles.heading}>Регистрация</h2>
        <form onSubmit={sendForm}>
            {
            dataForm.map(({ type, id, placeholder, htmlFor, message, num}) => (
            <div className={styles.formGroup} key={num}>
                <label htmlFor={htmlFor} className={styles.label}>{message}</label>
                <input type={type} id={id} placeholder={placeholder} required className={styles.input} value={formData[id] ?? ''} onChange={changeValue}/>
                <div className={styles.errorMessage}>
                      {Array.isArray(errorData[id])
                        ? errorData[id].map((err, i) => <div key={i}>{err}</div>)
                        : errorData[id]}
                  </div>
            </div>
            ))
            }
          <Button type="submit" className={styles.registerBtn}>Зарегистрироваться</Button>
        </form>
        <div className={styles.bottomText}>
          Уже есть аккаунт? <Link to="/" className={styles.link}>Войти</Link>
        </div>
      </div>
    </div>
  );
}
