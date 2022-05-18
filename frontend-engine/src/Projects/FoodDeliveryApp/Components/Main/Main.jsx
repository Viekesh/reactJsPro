import React, { useState, useEffect } from 'react';
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import logo from '../../Images/logo.png';
import ProfilePic from '../../Images/dragon-ball-super-new-super-hero-movie-goku-toei-animation-1276890.jpg';
import './Header.css';
import BannerContent from './BannerContent';
import deliveryMan2 from '../../Images/delivery-boy2.png';
import './Main.css'
import './DishContainer.css';
import './Checkout.css';
import './RightMenu.css';
import { MenuItems, Items } from '../Data/Data';
import DishMenus from './DishMenus';
import RowMenuCard from './RowMenuCard';
import SubMenuItems from './SubMenuItems';
import DebitCard from './DebitCard';
import CartItem from './CartItem';
import { useStateValue } from './StateProvider';



const Main = () => {

    const [isMainData, setMainData] = useState(
        Items.filter((element) => element.itemId === "buger01")
    );

    const [{ cart }, dispatch] = useStateValue();

    useEffect(() => {

        const rMenuContainer = document.querySelector(".row-container").querySelectorAll(".rowMenuCard");
        function setMenuCardActive() {
            rMenuContainer.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        };
        rMenuContainer.forEach(n => n.addEventListener("click", setMenuCardActive));
    }, [isMainData, cart]);

    useEffect(() => {
        const toggleMenu = document.querySelector(".toggleMenu");
        toggleMenu.addEventListener("click", () => {
            document.querySelector(".rightMenu").classList.toggle("active");
        })
    }, [])

    // Set main dish items on filter

    const setData = (itemId) => {
        setMainData(Items.filter((element) => element.itemId === itemId))
    };



    return (
        <>
            <header className='header y-axis-center'>

                <img src={logo} alt="logo" className='logo' />

                <div className="search-box y-axis-center">
                    <SearchRounded className='search-icon' />
                    <input type="text" placeholder='Search Here' className='search-input' />
                </div>

                <div className="shopping-cart x-y-axis-center">
                    <ShoppingCartRounded className='cart' />
                    <p className="no-of-items y-axis-center">
                        <span>2</span>
                    </p>
                </div>

                <div className="profile-container y-axis-center">
                    <div className="profile-img x-y-axis-center">
                        <img src={ProfilePic} alt="profile" className='profile-pic' />
                    </div>
                    <h2 className="username">Jack</h2>
                </div>

                <div className="toggleMenu">
                    <BarChart className='toggle-icon' />
                </div>
            </header>

            <main className='main'>

                <div className="banner y-axis-center">
                    <BannerContent name={"Jeremy"} discount={"20"} more={"#"} />
                    <img src={deliveryMan2} alt="DeliveryMan" className='deliveryPic' />
                </div>

                <div className='dish-container'>

                    <div className="menu-card">
                        <DishMenus name={"Menu Category"} />
                    </div>

                    <div className="row-container y-axis-center">
                        {
                            MenuItems && MenuItems.map(data => (
                                <div key={data.id} onClick={() => setData(data.itemId)}>
                                    <RowMenuCard imgSrc={data.imgSrc} name={data.name} isActive={data.id === 1 ? true : false} />
                                </div>
                            ))
                        }
                    </div>

                    <div className="dish-item-container y-axis-center">
                        {
                            isMainData && isMainData.map(data => (
                                <SubMenuItems
                                    key={data.id}
                                    itemId={data.id}
                                    imgSrc={data.imgSrc}
                                    name={data.name}
                                    rating={data.ratings}
                                    price={data.price}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className='rightMenu y-axis-center'>
                    <div className="debitcard-container">
                        <div className="debit-card">
                            <DebitCard />
                        </div>
                    </div>

                    {
                        !cart ? (
                            <div className="add-some-item">
                                <img src=""
                                    alt=""
                                    className='empty-cart'
                                />
                            </div>
                        ) : (

                            <div className='cart-checkout-container'>

                                <DishMenus name={"Cart Items"} />

                                <div className="cart-container">

                                    <div className="cart-items">
                                        {
                                            cart && cart.map((data) => (
                                                <CartItem
                                                    key={data.id}
                                                    itemId={data.id}
                                                    name={data.name}
                                                    imgSrc={data.imgSrc}
                                                    // qtty={1}
                                                    price={data.price}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="total-section">
                                    <h3>Total</h3>
                                    <p>
                                        <span>$ </span>
                                    </p>
                                </div>
                                <button className='checkout'>Checkout</button>
                            </div>
                        )
                    }
                </div>
            </main>
        </>
    )
}

export default Main;