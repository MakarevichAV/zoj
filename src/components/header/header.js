import React, {useState} from 'react';
import Logo from './logo/logo';
import Nav from './nav/nav';
import MenuBtn from './menu-btn/menu-btn';
import MobileNav from './mobile-nav/mobile-nav';
import s from './header.module.css';

const Header = () => {

    const [menu, setMenu] = useState({ visible: false });

    const navItems = [
        { name: 'Профиль', link: '/profile'},
        { name: 'Питание', link: '/food'},
        { name: 'Упражнения', link: '/training'},
        { name: 'Виртуальный тренер', link: '/trainer'},
    ];

    const showMenu = () => {
        setMenu({...menu, visible: true});
    }

    const hideMenu = () => {
        setMenu({...menu, visible: false});
    }

    return (
        <div className={s.header}>
            <div className={s.menu}>
                <Logo />
                <Nav navItems={navItems} />
                <MenuBtn onClick={showMenu}/>
                <MobileNav navItems={navItems} visible={menu.visible} onHide={hideMenu}/>
            </div>
        </div>
    )
}

export default Header;