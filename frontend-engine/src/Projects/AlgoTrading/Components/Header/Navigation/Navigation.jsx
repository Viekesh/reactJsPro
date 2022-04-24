import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../Images/logo1.png';



const Navigation = () => {

    const [showMobMenu, setShowMobMenu] = useState(false);

    const toggleMobMenu = () => {
        setShowMobMenu(!showMobMenu);
    }

    return (
        <div className='navigation'>
            <div className="nav-elements x-axis-center">

                <div className="logo">
                    <NavLink to='/' className='logo-link x-axis-center'>
                        <img src={logo} alt="TradeCorner" />
                        <span><h3>TradeCorner</h3></span>
                    </NavLink>
                </div>

                <div className="nav-options x-axis-center">
                    <NavLink to='/Login'><button className="login-btn x-y-axis-center">LogIn</button></NavLink>
                    <NavLink to='/Register'><button className="register-btn x-y-axis-center">Register</button></NavLink>
                    <div className="menu-icon">

                        <div className={`nav-links ${showMobMenu ? "overlay" : ""}`}>
                            <nav>
                                <NavLink to='/' className='link-1 link-pr'><h5>Price</h5></NavLink>
                                <NavLink to='/' className='link-1 link-al'><h5>All Exchange</h5></NavLink>
                                <NavLink to='/' className='link-1 link-in'><h5>Indicator Store</h5></NavLink>
                                <NavLink to='/' className='link-1 link-syn'><h5>Syntax</h5></NavLink>
                                <NavLink to='/' className='link-1 link-sym'><h5>Symbol</h5></NavLink>
                                <NavLink to='/' className='link-1 link-vi'><h5>Videos</h5></NavLink>
                                <NavLink to='/Login'><button className="login-btn-mob x-y-axis-center">LogIn</button></NavLink>
                                <NavLink to='/Register'><button className="register-btn-mob x-y-axis-center">Register</button></NavLink>
                            </nav>
                        </div>

                        <button
                            className={`hamburger hamburger--emphatic ${showMobMenu ? "is-active" : ""}`}
                            type="button"
                            onClick={toggleMobMenu}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navigation;