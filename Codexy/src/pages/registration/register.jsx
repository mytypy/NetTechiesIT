import { Link } from 'react-router-dom';
import styles from './registration.module.css';
import dataForm from './registerData';


export default function Register() {
  return (
    <div className={styles.registerWrapper}>
      <div className={styles.registerCard}>
        <h2 className={styles.heading}>Регистрация</h2>
        <form>
            {
            dataForm.map(({ type, id, placeholder, htmlFor, message, num}) => (
            <div className={styles.formGroup} key={num}>
                <label htmlFor={htmlFor} className={styles.label}>{message}</label>
                <input type={type} id={id} placeholder={placeholder} required className={styles.input} />
            </div>
            ))
            }
          <button type="submit" className={styles.registerBtn}>Зарегистрироваться</button>
        </form>
        <div className={styles.bottomText}>
          Уже есть аккаунт? <Link to="/" className={styles.link}>Войти</Link>
        </div>
      </div>
    </div>
  );
}
