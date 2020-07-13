import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import './login-page.css';

import Logo from '../../header/logo';
import Button from '../../button';

const LoginPage = ({isLoggedIn, onLogin}) => {

    return (
        <div className="login-page">
            <div className="login-window">
                <div className="login-header">
                    <Logo />
                </div>
                <div className="login-nav">
                    <a href="#" className="nav-item here">Вход</a>
                    <Link to="/register"><a href="#" className="nav-item">Регистрация</a></Link>
                </div>
                <div className="login-form">
                    <form>
                        <input type="text" className="login-input" placeholder="Логин"/>
                        <input type="password" className="login-input" placeholder="Пароль"/>
                        <button
                            type="submit" 
                            className="login-button"
                            onClick={onLogin}>
                                ВОЙТИ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default LoginPage;