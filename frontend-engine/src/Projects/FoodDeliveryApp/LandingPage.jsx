import React from 'react';
import './LandingPage.css';
import '../Styles/Common.css';
import Header from './Components/Navigation/Header';
import BottomMenu from './Components/Navigation/BottomMenu';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Header />
            <BottomMenu />
        </div>
    )
}

export default LandingPage;