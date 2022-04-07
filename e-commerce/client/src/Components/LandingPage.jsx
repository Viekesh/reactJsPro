import React from 'react';
import Navigation from './SubComponents/Navigation';
import './Styles/Common.css';

const LandingPage = () => {
    return (
        <div className='landing_page'>
            <header>
                <Navigation />
            </header>
        </div>
    )
}

export default LandingPage;