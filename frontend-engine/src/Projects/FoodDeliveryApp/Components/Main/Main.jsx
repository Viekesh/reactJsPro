import React from 'react'
import BannerContent from './BannerContent';
import deliveryMan2 from '../../Images/delivery-boy2.png';
import './Main.css'
import DishContainer from './DishContainer';

const Main = () => {
    return (
        <main className='main'>
            <div className="banner y-axis-center">
                <BannerContent name={"Jeremy"} discount={"20"} more={"#"} />
                <img src={deliveryMan2} alt="DeliveryMan" className='deliveryPic' />
            </div>
            <DishContainer />
        </main>
    )
}

export default Main;