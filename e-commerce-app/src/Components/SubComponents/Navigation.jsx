import React from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import '../Styles/Navigation.css';



const menuCheckbox = '#click';

const navIcon = () => {
    document.getElementById('click').checked = true;

    if (`${menuCheckbox}.checked === true`) {
        document.getElementById('sideMenu').style.right = 0;
    }

    document.getElementById('sideMenu').style.boxShadow = '0 9px 30px 9px rgba(1, 10, 136, 0.37)';
}

const closeIcon = () => {
    document.getElementById('click').checked = false;

    if (`${menuCheckbox}.checked=== false`) {
        document.getElementById('sideMenu').style.right = -18 + 'vw';
    }

    document.getElementById('sideMenu').style.boxShadow = 'none';
}

const Navigation = () => {
    return (
        <section className="navigation_menu flex absolute_center">
            <div className='navigation flex'>
                <div className="logo flex absolute_center">
                    <Link to='/'><h1 className='flex'>ReactJs</h1></Link>
                </div>
                <nav className='nav_buttons flex'>
                    <div className="search flex absolute_center">
                        <input className='search_bar' type="text" />
                        <div className="search_button flex absolute_center">
                            <SearchRoundedIcon className='search_icon' />
                        </div>
                    </div>

                    <div className="log_in_log_out">
                        <Link to='/LogIn'><button className='button menu_button'>LogIn</button></Link>
                    </div>

                    <div className="shopping_cart flex absolute_center">
                        <AddShoppingCartRoundedIcon className='cart_icon' />
                        <span className='item_count'>0</span>
                    </div>

                    <div className="nav_button">
                        <button className='button menu_button' onClick={navIcon}>Menu</button>
                    </div>

                    <input type="checkbox" id="click" />
                    <label htmlFor="click"></label>

                    <div className="side_menu" id='sideMenu'>
                        <div className="close"><button className='button menu_button close_button' onClick={closeIcon} id='closeBtn' >Close</button></div>
                        <div className="navigation_links">
                            <div className="link link_1">
                                <Link to='/ReturnOrders'>Return Orders</Link>
                            </div>
                            <div className="link link_1">
                                <Link to='/Fashion'>Fashion</Link>
                            </div>
                            <div className="link link_1">
                                <Link to='/Gadget'>Gadget</Link>
                            </div>
                            <div className="link link_1">
                                <Link to='/Furnniture'>Furniture</Link>
                            </div>
                            <div className="link link_1">
                                <Link to='/HomeAppliance'>Home Appliance</Link>
                            </div>
                            <div className="link link_1">
                                <Link to='/About'>About Us</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navigation;