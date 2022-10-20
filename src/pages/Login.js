import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import gov from '../assets/img/gov.png';

const Login = () => {
    return (
        <div className="Screen">
            <div className="CardLogin">
                <h1>Login</h1>
                <div className="Form">
                    <h5>Email</h5>
                    <input placeholder="gabriel@quickup.io"/>
                    <h5>Senha</h5>
                    <input placeholder="**********" type="password"/>
                    <button className='Login'> Entrar </button>
                    {/* <hr/>
                    <h6>ou</h6>
                    <hr/> */}
                    <Link to="/signup"><button className='SignUp'> Criar Conta </button></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;