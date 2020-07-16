import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './nav.module.css'

const Nav = () => {
    return (
        <ul className={s.nav}>
            <li><NavLink activeClassName={s.navActive} to="/profile">Профиль</NavLink></li>
            <li><NavLink activeClassName={s.navActive} to="/food">Питание</NavLink></li>
            <li><NavLink activeClassName={s.navActive} to="/sport">Упражнения</NavLink></li>
            <li><a href="#">Виртуальный тренер</a></li>
        </ul>
    )
}

export default Nav;