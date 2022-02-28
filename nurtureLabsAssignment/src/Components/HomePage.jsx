import React from 'react';
import SideMenu from './Section_1/SideMenu.jsx';
import UserInformation from './Section_2/UserInformation.jsx';
import StaticInformation from './Section_3/StaticInformation.jsx';
import Data from '../Data/Data.json';
import './HomePage.css';
import './Common.css';

const HomePage = () => {
    return (
        <div className='home_page'>
            <div className="top_print_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore!</p>
            </div>
            <div className="home_page_sections">
                <SideMenu />
                <UserInformation UserInformation={Data.data} />
                <StaticInformation UserInformation={Data.data} />
            </div>
        </div>
    )
}

export default HomePage;