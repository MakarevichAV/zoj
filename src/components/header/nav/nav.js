import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './nav.module.css'


const Nav = () => {
    const logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('token');
        window.location = '/login';
    }

    return (
        <ul className={s.nav}>
            <li><NavLink activeClassName={s.navActive} to="/profile">Профиль</NavLink></li>
            <li><NavLink activeClassName={s.navActive} to="/food">Питание</NavLink></li>
            <li><NavLink activeClassName={s.navActive} to="/sport">Упражнения</NavLink></li>
            <li><a href="#">Виртуальный тренер</a></li>
            <button onClick={logout}> <i class="fa fa-sign-out" aria-hidden="true"></i> Выйти </button>
        </ul>
    )
}

export default Nav;