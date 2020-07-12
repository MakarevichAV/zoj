import React from 'react';

import './login-page.css';

import Logo from '../../header/logo';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-window">
                <div className="login-header">
                    <Logo />
                </div>
                <div className="login-nav">
                    <a href="#" className="nav-item here">Вход</a>
                    <a href="#" className="nav-item">Регистрация</a>
                </div>
                <div className="login-form">
                    <form action="#" method="POST">
                        <input type="text" className="login-input" placeholder="Логин"/>
                        <input type="password" className="login-input" placeholder="Пароль"/>
                        <button type="submit" className="login-button">ВОЙТИ</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;