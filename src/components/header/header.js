import React from 'react';

import Logo from './logo';
import Nav from './nav';
import MenuBtn from './menu-btn';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper menu">
                <Logo />
                <Nav />
                <MenuBtn />
            </div>
        </div>
    )
}

export default Header;