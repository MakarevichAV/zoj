import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './login-page.css';

import Logo from '../../header/logo';
import LoginForm from './login-form';
import RegisterForm from './register-form';

const LoginPage = ({isLoggedIn, onLogin, onRegister}) => {

    return (
        <Router>
            <div className="login-page">
                <div className="login-window">
                    <div className="login-header">
                        <Logo />
                    </div>
                    <div className="login-nav">
                        <NavLink activeClassName="here" className="nav-item" to="/login">Вход</NavLink>
                        <NavLink activeClassName="here" className="nav-item" to="/register">Регистрация</NavLink>
                    </div>
                    <div className="login-form">
                        <form>
                            <input type="text" className="login-input" placeholder="Логин"/>
                            <input type="password" className="login-input" placeholder="Пароль"/>
                            
                                <Route  path="/login"
                                        render={ () => {
                                            return (
                                                <button
                                                    type="submit" 
                                                    className="login-button"
                                                    onClick={onLogin}>
                                                        ВОЙТИ
                                                </button>
                                            )
                                        } }/>
                                <Route  path="/register"
                                        render={ () => {
                                            return (
                                                <div>
                                                    <input type="password" className="login-input" placeholder="Повторите пароль"/>
                                                    <button
                                                        type="submit" 
                                                        className="login-button"
                                                        onClick={onRegister}>
                                                            ЗАРЕГИСТРИРОВАТЬСЯ
                                                    </button>
                                                </div>
                                            )
                                        } }/>
                        </form>
                    </div>
                </div>
            </div>
        </Router>
    )

}

export default LoginPage;