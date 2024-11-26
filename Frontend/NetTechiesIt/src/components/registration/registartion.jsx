import classes from './registartion.module.css'


export default function Register() {
    return (
        <>
        <h1>Регистрация в NetTechiesIT</h1>

    <div id={classes.wrapper}>
	    <form id={classes.registration} method="" action="" autocomplete="off">
            <input type="text" id="user" name="user" placeholder="Имя" />
            <input type="text" id="user" name="user" placeholder="Фамилия" />
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