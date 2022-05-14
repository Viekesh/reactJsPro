import React, { useEffect, useState } from 'react';
import './DishContainer.css';
import DishMenus from './DishMenus';
import RowMenuCard from './RowMenuCard';
import { MenuItems, Items } from '../Data/Data';
import SubMenuItems from './SubMenuItems';

const DishContainer = () => {

    const [isMainData, setMainData] = useState(
        Items.filter((element) => element.itemId === "buger01")
    );

    useEffect(() => {

        const rMenuContainer = document.querySelector(".row-container").querySelectorAll(".rowMenuCard");
        function setMenuCardActive() {
            rMenuContainer.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        };
        rMenuContainer.forEach(n => n.addEventListener("click", setMenuCardActive));
    }, [])

    return (
        <div className='dish-container'>

            <div className="menu-card">
                <DishMenus />
            </div>

            <div className="row-container y-axis-center">
                {
                    MenuItems && MenuItems.map(data => (
                        <div key={data.id}>
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
    )
}

export default DishContainer;