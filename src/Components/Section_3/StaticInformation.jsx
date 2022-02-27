import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import './StaticInformation.css';

const StaticInformation = ({ UserInformation }) => {
    return (
        <div className='static_information'>
            <div className="switch_address center_y_axis">

                <button className='chain_switch'><img src={UserInformation[0].chain.img} />Avalanch</button>
                <button className='contract_address center_y_axis'>
                    <div className="stroke_icon center_y_axis">
                        <div className="stroke_child center_x_y_axis">
                            <div className="stroke_dot"></div>
                        </div>
                    </div>
                    <span>
                        <p>
                            123...789
                            <i className="fa fa-angle-down"></i>
                        </p>
                    </span>
                </button>

            </div>

            <div className="custom_link">
                <a href="#">Custom link</a>
                <div className='link_add'>
                    <a href="#">http://testnet.xyz.xyz/trade?ref=</a>
                </div>
            </div>

            <div className="search_bar center_x_y_axis">
                <input type="text" placeholder="Enter" />
            </div>

            <div className="custom_link_btn custom_link center_y_axis">
                <button className='link_btn'><BiLinkExternal />Custom Link</button>

                <div className="cancel_btn">
                    <button className='cancel_btn'><ion-icon name="open"></ion-icon>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default StaticInformation;