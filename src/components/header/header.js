import React from 'react';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper menu">
                
                <div className="logo">
                    <p>
                        <span className="part-1">Дневник</span>
                        <span className="part-2">ЗОЖ</span>
                        <span className="part-3">ника</span>
                    </p>
                </div>
                
                <ul className="nav">
                    <li class="active"><a href="#">Профиль</a></li>
                    <li><a href="#">Питание</a></li>
                    <li><a href="#">Упражнения</a></li>
                    <li><a href="#">Виртуальный тренер</a></li>
                </ul>
                
            </div>
        </div>
    )
}

export default Header;