import React from 'react';
import s from './menu-btn.module.css';

const MenuBtn = ({onClick}) => {
    return (
        <button className={s.menuBtn} onClick={onClick}></button>
    )
}

export default MenuBtn;