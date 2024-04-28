import React from "react";
import style from './LoginForm.module.css';
import { FaUser, FaLock } from "react-icons/fa";



const LoginForm = () =>{
    return(
        <div className={style.wrapper}>
            <form action="">
                <h1>Login</h1>
                <div className={style.inputBox}>
                    <input type="text"
                    placeholder="E-mail"  required/>
                    <FaUser className={style.icon}/>
                </div>
                <div className={style.inputBox}>
                    <input type="password" name="password" id="" 
                    placeholder="Senha" required/>
                    <FaLock className={style.icon}/>
                </div>
                <div className={style.lembrarEsquecer}>
                    <label><input type="checkbox" />lembre de mim? <br /></label>
                    <a href="localhost:3000">Esqueceu a senha?</a>
                </div>
                <button type="submit">Login</button>

            </form>
        </div>
    );
}

export default LoginForm