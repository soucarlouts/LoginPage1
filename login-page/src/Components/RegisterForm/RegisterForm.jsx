import React from "react";
import style from './RegisterForn.module.css';
import { FaUser, FaLock } from "react-icons/fa";

const RegisterForm = () =>{
    return(
        <div className={style.wrapper}>
            <form action="">
                <h1>Registre-se</h1>
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
                <div className={style.inputBox}>
                    <input type="password" name="password" id="" 
                    placeholder="Repetir a Senha" required/>
                    <FaLock className={style.icon}/>
                </div>
                <div className={style.lembrarEsquecer}>
                    <label><input type="checkbox" />lembrar de mim? <br /></label>
                </div>
                <button type="submit">Registrar</button>

            </form>
        </div>        
    );
}

export default RegisterForm