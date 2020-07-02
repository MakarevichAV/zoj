import React from 'react';

import './nav.css'

const Nav = () => {
    return (
        <ul className="nav">
            <li class="active"><a href="#">Профиль</a></li>
            <li><a href="#">Питание</a></li>
            <li><a href="#">Упражнения</a></li>
            <li><a href="#">Виртуальный тренер</a></li>
        </ul>
    )
}

export default Nav;