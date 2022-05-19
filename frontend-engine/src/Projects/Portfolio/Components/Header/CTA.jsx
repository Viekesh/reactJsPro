import React from 'react';
import CV from '../../Assets/cv.pdf';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='.a btn'>Download CV</a>
            <a href="#contact" className='.a btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA;