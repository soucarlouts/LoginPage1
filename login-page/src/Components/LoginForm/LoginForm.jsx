import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";


const LoginForm = () =>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text"
                    placeholder="Username"  required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" name="password" id="" 
                    placeholder="Senha" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="lembrar-esquecer">
                    <label><input type="checkbox" />lembre de mim? <br /></label>
                    <a href="localhost:3000">Esqueceu a senha?</a>
                </div>
                <button type="submit">Login</button>

                <div className="link-registro">
                   <p>Nao tem uma conta?</p><a href="#">Registre</a>
                </div>
            </form>
        </div>
    );
}

export default LoginForm