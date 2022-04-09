import React, { useEffect } from 'react';
import Header from './SubComponents/Header';
import BannerName from './SubComponents/BannerName';
import MenuContainer from './SubComponents/MenuContainer';
import './Styles/LandingPage.css';
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import deliveryMan2 from '../Images/delivery-boy2.png';

const LandingPage = () => {

    useEffect(() => {
        const menuLi = document.querySelectorAll("#menu li");

        function setMenuActive() {
            menuLi.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");

            // Inside this "forEach" element we are going to add a listner event.
            // so n.addEventListener event...
            // Here we are going to add the click, whenver we click that, we need to call a function so we passing a reference for a function as "setMenuActive" this is just a reference so you should not call that function, you need to send a reference so we are going to create a function over here, so function "setMenuActive" open that function.
            // So inside this now what we need to do remove all the active element all single li which is inside that menu, so menuLi.forEach inside the every single single element in that element classlist we are going to remove the active class/
            // So first we remove all the active class then for that particular current clicked li we are going to add the classlist.add that active.
            // so what is happening here is first we are removing the complete active class from this li for instance if I click this that for that particular class we are making that class as an active so if we click this here we go see that class is acting now let's make sure there is a delay and see this class is active now.
            // Now if we click it from that it will be removed and it will be added the active to this particular class.
            // So for according to that we need to move this indicator 
        }

        menuLi.forEach(n => n.addEventListener('click', setMenuActive))
    })

    // These useEffect hook will help you to write the custom javascript elements that it will be rendered once whenever your page is rendered.
    // This takes two parameters one is the function and another one is the dependancies so that you can pass any states or dependancies what you need you can over there so whenever the state is updated this useeffect will be rerendered
    // So currentyly we are not pass any state or dependancy inside it, all we have to do is we are going to get the complete the li tag which is inside the menu.
    // At the time we use this created this id by using that we are going to get that element 
    return (
        <div className='landing_page'>
            <header>
                <Header />

                <main>
                    <div className="mainContainer">

                        <div className="banner">

                            <BannerName name={"Jeremy"} discount={"20"} more={"#"} />
                            <img src={deliveryMan2} alt="DeliveryMan" className='deliveryPic' />

                        </div>

                        <div className="menuContainer">

                            <div className="menuCard"></div>
                            <div className="rowContainer"></div>
                            <div className="dishitemContainer"></div>

                        </div>

                    </div>

                    <div className="rightMenu"></div>
                </main>

                <div className="bottomMenu">
                    <ul id="menu">
                        <MenuContainer link={'#'} icon={<HomeRounded />} isHome />

                        {/* Here we can use prop, a prop is nothing but a property of a component */}
                        {/* Here we can use icon as a "HomeRounded" */}
                        {/* Then if it is home we are going to add an active class, thats why we are adding it "isHome" (an active class) to understand why we creating this prop over here */}

                        <MenuContainer link={'#'} icon={<Chat />} />

                        <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />

                        <MenuContainer link={'#'} icon={<Favorite />} />

                        <MenuContainer link={'#'} icon={<SummarizeRounded />} />

                        <MenuContainer link={'#'} icon={<Settings />} />

                        <div className="indicator"></div>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default LandingPage;