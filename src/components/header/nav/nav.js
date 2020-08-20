import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './nav.module.css'


const Nav = ({navItems}) => {
    const logout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('token');
        window.location = '/login';
    }

    const links = navItems.map((item) => {
        return (
            <li>
                <NavLink activeClassName={s.navActive} 
                    to={item.link}>{item.name}</NavLink>
            </li>
        )
    });

    return (
        <ul className={s.nav}>
            {links}
            <button onClick={logout}> 
                <i className="fa fa-sign-out" aria-hidden="true"></i> 
                Выйти 
            </button>
        </ul>
    )
}

export default Nav;