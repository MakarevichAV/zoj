import React from 'react';

import { Link } from 'react-router-dom';

import './nav.css'

const Nav = () => {
    return (
        <ul className="nav">
            <li><Link to="/profile">Профиль</Link></li>
            <li><Link to="/food">Питание</Link></li>
            <li><Link to="/sport">Упражнения</Link></li>
            <li><a href="#">Виртуальный тренер</a></li>
        </ul>
    )
}

export default Nav;