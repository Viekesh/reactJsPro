import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header x-y-axis-center'>
            <div className="h_box">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                    alt="logo"
                    className='header_logo'
                />
                <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                    alt="logo"
                    className='user_logo'
                />
            </div>
        </header>
    )
}

export default Header;