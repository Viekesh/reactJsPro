import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import bitcoin_img2 from '../Images/bitcoin_img2.png';
import bitcoin_img3 from '../Images/bitcoin_img3.png';
import copy_img6 from '../Images/copy_img6.png';
import './UserInformation.css';

const UserInformation = ({ UserInformation }) => {
    return (
        <div className='user_information'>
            <div className="top_portion center_y_axis">
                <h4 className='p'>Section</h4>
                <div className="balance center_y_axis">
                    <div className="stroke_icon center_y_axis">
                        <div className="stroke_child center_x_y_axis">
                            <div className="stroke_dot"></div>
                        </div>
                    </div>
                    <p className='p1'>0.2 $ XYZ</p>
                    <p className='p2'>Tier 1</p>
                </div>
            </div>

            <div className="promo_panel center_y_axis">
                <div className="center_x_y_axis">
                    <IconContext.Provider value={{ className: "close_icon" }}>
                        <AiOutlineCloseCircle />
                    </IconContext.Provider>
                </div>
                <div className="promo_text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laudantium reprehenderit amet!</p>
                    <button className='tut_btn'>Tutorial</button>
                </div>
                <img src={bitcoin_img2} alt='logo' />
            </div>

            <div className="rewards_data center_y_axis">
                <div className="r_data">
                    <h3>Your rewards</h3>
                    <h2>$ 0.123456789</h2>
                    <div className="rewards_values center_x_y_axis">
                        <p>$40 AVAX</p>
                        <p>$10 BNB</p>
                        <p>$210 BTC</p>
                    </div>
                </div>
                <div className="custom_link_btn">
                    <button className='link_btn'><BiLinkExternal />Custom Link</button>
                </div>
            </div>

            <div className="referral_links center_y_axis">
                <div className="referral_link_data">
                    <h3 className='center_y_axis'><span><img src={bitcoin_img3} alt="" /></span>12.5% of fee</h3>
                    <p>Your referral link for ABC</p>
                    <a className='cus_link center_y_axis'>http://unityexchange.design <span className='center_x_y_axis'><img src={copy_img6} alt="" /></span></a>
                </div>
                <div className="referral_link_data">
                    <h3 className='center_y_axis'><span><img src={bitcoin_img3} alt="" /></span>12.5% of fee</h3>
                    <p>Your referral link for XYZ</p>
                    <a className='cus_link center_y_axis'>http://unityexchange.design<span className='center_x_y_axis'><img src={copy_img6} alt="" /></span></a>
                </div>
            </div>

            <div className="user_data">
                <span><button className='tab_btn_1'>First Tab</button></span><span><button className='tab_btn_2'>Second Tab</button></span>
                <table className='table_1'>
                    <tr>
                        <th>Asset</th>
                        <th>Amount</th>
                        <th>User Account</th>
                        <th>Referral Earning</th>
                    </tr>
                </table>
                <table className='table_2'>
                    <tr>
                        <td>
                            <span className='center_x_y_axis'>
                                <img src={UserInformation[0].img} />
                                <span>
                                    {UserInformation[0].asset}
                                    <p className='center_x_y_axis'>
                                        {UserInformation[0].type}
                                        <span className='asset_data center_x_y_axis'>
                                            <img src={UserInformation[0].chain.img} alt="" />
                                            <p>{UserInformation[0].chain.name}</p>
                                        </span>
                                    </p>
                                </span>
                            </span>
                        </td>
                        <td className='asset_data'>
                            {UserInformation[0].amount}
                            <span>BNB</span>
                            <p>{UserInformation[0].state}</p>
                        </td>
                        <td>{UserInformation[0].user}</td>
                        <td className='asset_data'>
                            {UserInformation[0].referral_earnings}
                            BNB
                            <p>View on BSC scan</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default UserInformation;