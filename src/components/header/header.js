import React from 'react';

import Logo from './logo/logo';
import Nav from './nav/nav';
import MenuBtn from './menu-btn/menu-btn';
import MobileNav from './mobile-nav/mobile-nav';

import s from './header.module.css';

const Header = () => {

    const navItems = [
        { name: 'Профиль', link: '/profile'},
        { name: 'Питание', link: '/food'},
        { name: 'Упражнения', link: '/sport'},
        { name: 'Виртуальный тренер', link: '/trainer'},
    ];

    return (
        <div className={s.header}>
            <div className={s.menu}>
                <Logo />
                <Nav navItems={navItems} />
                <MenuBtn />
                <MobileNav navItems={navItems} />
            </div>
        </div>
    )
}

export default Header;