import React from 'react';

import { NavLink } from 'react-router-dom';

import './nav.css'

const Nav = () => {
    return (
        <ul className="nav">
            <li><NavLink activeClassName="nav-active" to="/profile">Профиль</NavLink></li>
            <li><NavLink activeClassName="nav-active" to="/food">Питание</NavLink></li>
            <li><NavLink activeClassName="nav-active" to="/sport">Упражнения</NavLink></li>
            <li><a href="#">Виртуальный тренер</a></li>
        </ul>
    )
}

export default Nav;