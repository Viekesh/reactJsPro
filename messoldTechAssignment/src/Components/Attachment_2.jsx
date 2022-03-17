import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/attachment_2.css';

const Attachment_2 = () => {
    return (
        <div className='attachment_2'>
            <Link to="/">
                <button className="button a_1">Attachment 1</button>
            </Link>
            <Link to="/Attachment_2">
                <button className="button a_2">Attachment 2</button>
            </Link>
            <div className="buttons">
                <p className='att2_p'>Lorem ipsum dolor</p>
                <div className="btn btn_1"></div>
                <div className="btn btn_2"></div>
                <div className=" btn_3"></div>
                <div className="btn btn_4"></div>
                <div className="btn btn_5"></div>
            </div>
            <div className="att1">
                <div className="a_values flex">
                    <div className="a_values_1 flex absolute_center">
                        <h1 className='head_a_1'>8.4M</h1>
                        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates </p>
                    </div>
                    <div className="a_values_1 flex absolute_center">
                        <h1 className='head_a_1'>8.4M</h1>
                        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates </p>
                    </div>
                </div>
                <div className="a_values a_values_2 flex absolute_center">
                    <h1 className='head_a_1'>8.4M</h1>
                    <p className='para_a_2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet excepturi </p>
                </div>
            </div>
            <div className="att2 flex absolute_center">
                <div className="att2_values_1">
                    <h4 className='h_a_2'>Our Footprint</h4>
                    <p className="p_a_2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum?Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique.</p>
                    <p className="p_a_2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellat, obcaecati expedita optio quibusdam quia est dignissimos, labore voluptatum ex nihil.</p>
                    <p className="p_a_2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, quas quo? Soluta explicabo eveniet deserunt consequatur. Nulla porro fuga expedita aperiam.</p>
                </div>
                <div className="att2_values_1 flex absolute_center">
                    <h1 className='head_a_1'>867,9</h1>
                    <p className="att2_p">Lorem ipsum dolor sit amet.</p>
                    <h1 className='head_a_1'>373.73</h1>
                    <p className="att2_p">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Attachment_2;