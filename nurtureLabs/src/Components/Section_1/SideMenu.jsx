import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineAppstore } from 'react-icons/ai';
import { BiBarChartSquare } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineControl } from 'react-icons/ai';
import { HiOutlinePresentationChartLine } from 'react-icons/hi';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { HiOutlineDatabase } from 'react-icons/hi';
import { BiCrosshair } from 'react-icons/bi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { GiShare } from 'react-icons/gi';
import { TiDocumentText } from 'react-icons/ti';
import { VscGlobe } from 'react-icons/vsc';
import { SiToggl } from 'react-icons/si';
import { FaCircle } from 'react-icons/fa';
import './SideMenu.css';

const SideMenu = () => {
    return (
        <div className='side_menu'>
            <div className="user_name_heading center_y_axis">
                <span className='center_x_y_axis'>
                    <div className="logo center_x_y_axis"><p>A</p></div>
                    <h3>Name</h3>
                </span>
                <IconContext.Provider value={{ className: "top-react-icons" }}>
                    <BsArrowLeft />
                </IconContext.Provider>
            </div>

            <div className="menu_section">
                <a href="#" className='menu_links center_y_axis'>
                    <IconContext.Provider value={{ className: "menu-icons" }}>
                        <AiOutlineAppstore />
                    </IconContext.Provider>
                    Home
                </a>
                <a href="#" className='menu_links center_y_axis'>
                    <IconContext.Provider value={{ className: "menu-icons" }}>
                        <BiBarChartSquare />
                    </IconContext.Provider>
                    Section 1
                </a>
                <a href="#" className='menu_links center_y_axis'>
                    <IconContext.Provider value={{ className: "menu-icons" }}>
                        <AiOutlineControl />
                    </IconContext.Provider>
                    Section 2
                </a>
                <a href="#" className='menu_links center_y_axis'>
                    <IconContext.Provider value={{ className: "menu-icons" }}>
                        <HiOutlinePresentationChartLine />
                    </IconContext.Provider>
                    Section 3
                </a>
                <a href="#" className='menu_links center_y_axis'>
                    <IconContext.Provider value={{ className: "menu-icons" }}>
                        <RiExchangeDollarLine />
                    </IconContext.Provider>
                    Section 4
                </a>
                <a href="#" className='menu_links center_y_axis'>
                    <IconContext.Provider value={{ className: "menu-icons" }}>
                        <HiOutlineDatabase />
                    </IconContext.Provider>
                    Section 5
                </a>
                <a href="#" className='menu_links center_y_axis'>
                    <IconContext.Provider value={{ className: "menu-icons" }}>
                        <BiCrosshair />
                    </IconContext.Provider>
                    Section 6
                </a>
                <a href="#" className='menu_links center_y_axis'>
                    <IconContext.Provider value={{ className: "menu-icons" }}>
                        <BiBarChartAlt2 />
                    </IconContext.Provider>
                    Seciton 7
                </a>
                <a href="#" className='menu_links center_y_axis sec_8'>
                    <IconContext.Provider value={{ className: "section_8" }}>
                        <GiShare />
                    </IconContext.Provider>
                    Section 8
                </a>
                <a href="#" className='menu_links center_y_axis'>
                    <IconContext.Provider value={{ className: "menu-icons" }}>
                        <TiDocumentText />
                    </IconContext.Provider>
                    Section 9
                </a>
            </div>

            <div className="menu_bottom center_x_y_axis">
                <button className='user_btn_1 center_y_axis'><span className='user_img'>A</span>$0.90</button>
                <button className='user_btn_2'>Buy $XYZ</button>
            </div>

            <div className="additional_button center_y_axis">
                <IconContext.Provider value={{ className: "menu-icons" }}>
                    <VscGlobe />
                </IconContext.Provider>
                <span className='dark_toggle center_x_y_axis'>
                    <IconContext.Provider value={{ className: "menu-icons toggle" }}>
                        <SiToggl />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ className: "menu-icons blue" }}>
                        <FaCircle />
                    </IconContext.Provider>
                </span>
            </div>
        </div>
    )
}

export default SideMenu;
