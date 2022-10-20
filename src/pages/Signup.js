import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import gov from '../assets/img/gov.png';

const Signup = () => {
    return (
        <div className="Screen">
            <div className="CardLogin">
                <h1>Cadastro</h1>
                <div className="Form">
                    <h5>Email</h5>
                    <input placeholder="gabriel@quickup.io" type="email"/>
                    <h5>CPF</h5>
                    <input placeholder="000.000.000-00"/>
                    <h5>Senha</h5>
                    <input placeholder="**********" type="password"/>
                    <button className='Login'> Criar Conta </button>
                    {/* <hr/>
                    <h6>ou</h6>
                    <hr/> */}
                    <Link to="/login"><button className='SignUp'> Fazer Login </button></Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;