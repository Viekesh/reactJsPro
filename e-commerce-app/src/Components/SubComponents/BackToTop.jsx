import React, { useState, useEffect } from 'react';
import '../Styles/BackToTop.css';

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className='scroll_to_top'>
            {isVisible && (
                <div onClick={scrollToTop} className="back_to_top flex absolute_center">Back<br />To<br />Top</div>
            )}
        </div>
    )
}

export default BackToTop;