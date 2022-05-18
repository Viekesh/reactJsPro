import React from 'react';
import './LandingPage.css';
import '../Styles/Common.css';
import BottomMenu from './Components/Navigation/BottomMenu';
import Main from './Components/Main/Main';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Main />
            <BottomMenu />
        </div>
    )
}

export default LandingPage;