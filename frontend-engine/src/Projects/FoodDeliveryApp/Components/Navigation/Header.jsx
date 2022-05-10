import React from 'react';
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import logo from '../../Images/logo.png';
import ProfilePic from '../../Images/dragon-ball-super-new-super-hero-movie-goku-toei-animation-1276890.jpg';
import './Header.css';

const Header = () => {
    return (
        <header className='header y-axis-center'>

            <img src={logo} alt="logo" className='logo' />

            <div className="search-box y-axis-center">
                <SearchRounded className='search-icon' />
                <input type="text" placeholder='Search Here' className='search-input' />
            </div>

            <div className="shopping-cart x-y-axis-center">
                <ShoppingCartRounded className='cart' />
                <p className="no-of-items y-axis-center">
                    <span>2</span>
                </p>
            </div>

            <div className="profile-container y-axis-center">
                <div className="profile-img x-y-axis-center">
                    <img src={ProfilePic} alt="profile" className='profile-pic' />
                </div>
                <h2 className="username">Jack</h2>
            </div>

            <div className="toggle-menu">
                <BarChart className='toggle-icon' />
            </div>
        </header>
    )
}

export default Header;