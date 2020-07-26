import React from 'react';
import {useDispatch} from 'react-redux';
import {showMenu} from '../../../context/actions/menuActions';

import s from './menu-btn.module.css';

const MenuBtn = () => {

    const dispatch = useDispatch();

    const onShowMenu = () => {
        dispatch(showMenu());
    }

    return (
        <button className={s.menuBtn} onClick={onShowMenu}></button>
    )
}

export default MenuBtn;