import React from 'react';
import NavBar from './navBar';
import logo from '/assets/SelfLoveBombWithText.png'

function Header () {
    return (
        <header className="header">
            <div className="logo">Self Love Bombs</div>
            <logo></logo>
            <NavBar>
            </NavBar>
        </header>
    )
}

export default Header;

//should have logo