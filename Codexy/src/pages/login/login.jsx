import { Link } from 'react-router-dom';
import styles from './login.module.css';
import DataForm from './loginData';


export default function Login() {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <h2 className={styles.heading}>Вход</h2>
        <form>
          {
          DataForm.map(({num , type, id, placeholder, htmlFor, message}) => (
            <div className={styles.formGroup} key={num}>
              <label htmlFor={htmlFor} className={styles.label}>{message}</label>
              <input type={type} id={id} placeholder={placeholder} required className={styles.input} />
            </div>
          ))
        }
          <button type="submit" className={styles.loginBtn}>Войти</button>
        </form>
        <div className={styles.bottomText}>
          Нет аккаунта? <Link to="/registration" className={styles.link}>Регистрация</Link>
        </div>
      </div>
    </div>
  );
}