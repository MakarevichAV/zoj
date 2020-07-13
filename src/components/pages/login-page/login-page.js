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
                        <Route  path="/login" render={ () => <LoginForm/> }/>
                        <Route  path="/register" render={ () => <RegisterForm/> }/>
                    </div>
                </div>
            </div>
        </Router>
    )

}

export default LoginPage;