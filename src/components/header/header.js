import React from 'react';

import Logo from './logo';
import Nav from './nav';
import MenuBtn from './menu-btn';

import s from './header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.menu}>
                <Logo />
                <Nav />
                <MenuBtn />
            </div>
        </div>
    )
}

export default Header;