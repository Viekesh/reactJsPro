import React from 'react';
// import { Link } from 'react-router-dom';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import '../Styles/Navigation.css';



const menuCheckbox = '#click';

const navIcon = () => {
    document.getElementById('click').checked = true;

    if (`${menuCheckbox}.checked === true`) {
        document.getElementById('sideMenu').style.right = 0;
    }
}

const closeIcon = () => {
    document.getElementById('click').checked = false;

    if (`${menuCheckbox}.checked=== false`) {
        document.getElementById('sideMenu').style.right = -18 + 'vw';
    }
}

const Navigation = () => {
    return (
        <div className='navigation flex'>
            <div className="logo">
                <h1>ReactJs</h1>
            </div>
            <nav className='nav_buttons flex'>
                <div className="search flex absolute_center">
                    <input className='search_bar' type="text" />
                    <div className="search_button flex absolute_center">
                        <SearchRoundedIcon className='search_icon' />
                    </div>
                </div>

                <div className="log_in_log_out">
                    <button className='button menu_button'>Log In</button>
                </div>

                <div className="shopping_cart flex absolute_center">
                    <AddShoppingCartRoundedIcon className='cart_icon' />
                    <span>0</span>
                </div>

                <div className="navigation_menu">
                    <button className='button menu_button' onClick={navIcon}>Menu</button>
                </div>

                <input type="checkbox" id="click" />
                <label htmlFor="click"></label>

                <div className="side_menu" id='sideMenu'>
                    <div className="close"><button className='button menu_button close_button' onClick={closeIcon} id='closeBtn' >Close</button></div>
                    <div className="navigation_links">
                        <div className="link link_1">
                            <a href='Home'>Home</a>
                        </div>
                        <div className="link link_1">
                            <a href='Fashion'>Fashion</a>
                        </div>
                        <div className="link link_1">
                            <a href='Gadget'>Gadget</a>
                        </div>
                        <div className="link link_1">
                            <a href='Furnniture'>Furniture</a>
                        </div>
                        <div className="link link_1">
                            <a href='Home'>Home Appliance</a>
                        </div>
                        <div className="link link_1">
                            <a href='About'>About Us</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;