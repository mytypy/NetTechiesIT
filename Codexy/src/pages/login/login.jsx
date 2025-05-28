import {Link} from 'react-router';
import styles from "./login.module.css";


export default function Login() {
    return (
        <>
        <div class={styles.login_card}>
            <h2>Вход</h2>
            <form>
            <div class={styles.form_group}>
                <label for="email">Электронная почта</label>
                <input type="text" id="email" placeholder="you@example.com" required />
            </div>
            <div class={styles.form_group}> 
                <label for="password">Пароль</label>
                <input type="password" id="password" placeholder="Введите ваш пароль" required />
            </div>
            <button type="submit" class={styles.login_btn}>Войти</button>
            </form>
            <div class={styles.bottom_text}>
            Нет созданного аккаунта? <Link to="registration/">Регистрация</Link>
            </div>
        </div>
        </>
    )
}