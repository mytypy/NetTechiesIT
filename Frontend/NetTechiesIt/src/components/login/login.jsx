import classes from './login.module.css'


export default function Login() {
    return (
        <>
        <h1>Вход в NetTechiesIT</h1>

        <div id={classes.wrapper}>
	        <form id={classes.signin} method="" action="" autocomplete="off">
		        <input type="text" id="user" name="user" placeholder="Логин" />
		        <input type="password" id="pass" name="pass" placeholder="Пароль" />

		        <button type="submit">&#xf0da;</button>
		        <p>Забыли пароль?
			        <a href="#">Нажмите сюда</a>
		        </p>
	        </form>
        </div>
  
        </>
    )
}