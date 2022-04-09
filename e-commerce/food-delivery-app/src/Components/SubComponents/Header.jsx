import React from 'react';
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import logo from '../../Images/logo.png';
import '../Styles/Header.css';
import ProfilePic from '../../Images/dragon-ball-super-new-super-hero-movie-goku-toei-animation-1276890.jpg';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" className='logo' />

            <div className="inputBox">
                <SearchRounded className='searchIcon' />
                <input type="text" placeholder='search' />
            </div>

            <div className="shoppingCart">
                <ShoppingCartRounded className='cart' />
                <div className="cartContent">
                    <p>2</p>
                </div>
            </div>

            <div className="profileContainer">
                <div className="imgBox">
                    <img src={ProfilePic} alt="profilepic" className='profilePic' />
                </div>

                <h2 className="userName">abc</h2>
            </div>

            <div className="toggleMenu">
                <BarChart className='toggleIcon' />
            </div>
        </div>
    )
}

export default Header;