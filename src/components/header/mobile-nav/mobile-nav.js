import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hideMenu} from '../../../context/actions/menuActions';
import { NavLink } from 'react-router-dom';
import Crose from './crose';
import s from './mobile-nav.module.css';

const MobileNav = () => {
    const dispatch = useDispatch();
    const menuData = useSelector(state => state.mobileMenu);

    const onHideMenu = () => {
        dispatch(hideMenu())
    }

    return (
        
        <ul className={`${s.nav} ${menuData.visible ? s.visible : ''}`}>
            <Crose />
            <li><NavLink    activeClassName={s.navActive} to="/profile" 
                            onClick={onHideMenu}>Профиль</NavLink></li>
            <li><NavLink    activeClassName={s.navActive} to="/food" 
                            onClick={onHideMenu}>Питание</NavLink></li>
            <li><NavLink    activeClassName={s.navActive} to="/sport" 
                            onClick={onHideMenu}>Упражнения</NavLink></li>
            <li><a href="#" onClick={onHideMenu}>Виртуальный тренер</a></li>
            <button className={s.logoutBtn} onClick={onHideMenu}> <i class="fa fa-sign-out" aria-hidden="true"></i> Выйти </button>
        </ul>
    )
}

export default MobileNav;