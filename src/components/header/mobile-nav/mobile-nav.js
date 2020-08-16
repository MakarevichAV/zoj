import React from 'react';
import { NavLink } from 'react-router-dom';
import Crose from './crose';
import s from './mobile-nav.module.css';

const MobileNav = ({navItems, visible, onHide}) => {

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
                    onClick={onHide}>{item.name}</NavLink>
            </li>
        )
    });

    return (
        <ul className={`${s.nav} ${visible ? s.visible : ''}`}>
            <Crose onClick={onHide}/>
            {links}
            <button className={s.logoutBtn} onClick={logout}> 
                <i className="fa fa-sign-out" aria-hidden="true"></i> 
                Выйти 
            </button>
        </ul>
    )
}

export default MobileNav;