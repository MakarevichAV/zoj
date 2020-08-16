import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hideMenu} from '../../../context/actions/menuActions';
import { NavLink } from 'react-router-dom';
import Crose from './crose';
import s from './mobile-nav.module.css';

const MobileNav = ({navItems}) => {
    const dispatch = useDispatch();
    const menuData = useSelector(state => state.mobileMenu);

    const onHideMenu = () => {
        dispatch(hideMenu())
    }

    const logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('token');
        window.location = '/login';
    }

    const links = navItems.map((item) => {
        return (
            <li>
                <NavLink activeClassName={s.navActive} 
                    to={item.link} 
                    onClick={onHideMenu}>{item.name}</NavLink>
            </li>
        )
    });

    return (
        
        <ul className={`${s.nav} ${menuData.visible ? s.visible : ''}`}>
            <Crose />
            {links}
            <button className={s.logoutBtn} onClick={logout}> 
                <i className="fa fa-sign-out" aria-hidden="true"></i> 
                Выйти 
            </button>
        </ul>
    )
}

export default MobileNav;