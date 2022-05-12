import React, { useEffect } from 'react';
import './DishContainer.css';
import DishMenus from './DishMenus';
import RowMenuCard from './RowMenuCard';
import { MenuItems } from '../Data/Data';

const DishContainer = () => {

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

            <div className="dish-item-container">

            </div>
        </div>
    )
}

export default DishContainer;