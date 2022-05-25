import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Header.css';
import logo from './logo.svg';

const Header = () => {
    return (
        <header>
            <NavLink to='/'>
                <img src={logo} alt="logo" className='logo' />
            </NavLink>
            <nav className='center desktop'>
                <NavLink to='#'>Model S</NavLink>
                <NavLink to='#'>Model 3</NavLink>
                <NavLink to='#'>Model X</NavLink>
                <NavLink to='#'>Model Y</NavLink>
                <NavLink to='#'>Solar Roof</NavLink>
                <NavLink to='#'>Solar Panels</NavLink>
            </nav>
            <nav className="right">
                <NavLink to='#' className='desktop'>Account</NavLink>
                <NavLink to='#' className='desktop'>Shop</NavLink>
                <NavLink to='#'>Menu</NavLink>
            </nav>
        </header>
    )
}

export default Header;