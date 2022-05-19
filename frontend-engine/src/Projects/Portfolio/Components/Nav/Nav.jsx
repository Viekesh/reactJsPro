import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { GoProject } from 'react-icons/go';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {

    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav className='y-axis-center'>
            <a href="#home"
                className={activeNav === '#home' ? 'active' : ''}
                onClick={() => setActiveNav("#home")}
            ><AiOutlineHome /></a>
            <a href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === '#about' ? 'active' : ''}
            ><AiOutlineUser /></a>
            <a href="#experience"
                className={activeNav === '#experience' ? 'active' : ''}
                onClick={() => setActiveNav("#experience")}
            ><BiBook /></a>
            <a href="#services"
                className={activeNav === '#services' ? 'active' : ''}
                onClick={() => setActiveNav("#services")}
            ><RiServiceLine /></a>
            <a href="#testimonial"
                className={activeNav === '#testimonial' ? 'active' : ''}
                onClick={() => setActiveNav("#testimonial")}
            ><GoProject /></a>
            <a href="#contact"
                className={activeNav === '#contact' ? 'active' : ''}
                onClick={() => setActiveNav("#contact")}
            ><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav;