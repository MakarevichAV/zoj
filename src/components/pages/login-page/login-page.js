import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import s from './login-page.module.css';
import Logo from '../../header/logo/logo';
import LoginForm from './login-form/login-form';
import RegisterForm from './register-form/register-form';

const LoginPage = () => {
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
                        <Route path="/login" render={ () => <LoginForm/> }/>
                        <Route path="/register" render={ () => <RegisterForm/> }/>
                    </div>
                </div>
            </div>
        </Router>
    )

}

const mapStateToProps = (state) => {
    return { isAuth: state.userInfo.isAuthenticated }
};
export default connect(mapStateToProps)(LoginPage);