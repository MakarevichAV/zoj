import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import s from './login-page.module.css';

import Logo from '../../header/logo';
import LoginForm from './login-form';
import RegisterForm from './register-form';

const LoginPage = ({isLoggedIn, onLogin, onRegister}) => {

    return (
        <Router>
            <div className={s.loginPage}>
                <div className={s.window}>
                    <div className={s.header}>
                        <Logo />
                    </div>
                    <div className={s.nav}>
                        <NavLink activeClassName={s.here} className={s.item} to="/login">Вход</NavLink>
                        <NavLink activeClassName={s.here} className={s.item} to="/register">Регистрация</NavLink>
                    </div>
                    <div className={s.form}>
                        <Route  path="/login" render={ () => <LoginForm/> }/>
                        <Route  path="/register" render={ () => <RegisterForm/> }/>
                    </div>
                </div>
            </div>
        </Router>
    )

}

export default LoginPage;