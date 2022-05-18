import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { Items } from '../Data/Data';
import { useStateValue } from './StateProvider';
import { actionType } from './Reducer';
import './SubMenuItems.css';



let cartData = [];

const SubMenuItems = ({ imgSrc, name, rating, price, itemId }) => {

    const [isFavourite, setFavourite] = useState(false);

    const [currentValue, setCurrentValue] = useState(Math.floor(rating));

    const [isCart, setCart] = useState(null);

    const [{ }, dispatch] = useStateValue();

    useEffect(() => {
        if (isCart) {
            cartData.push(isCart);
            dispatch({
                type: actionType.SET_CART,
                cart: cartData,
            })
        }
    }, [isCart]);

    const handleClick = (value) => {
        setCurrentValue(value);
    }

    return (
        <div className='item-card y-axis-center' id={itemId}>

            <div className={`isFavourite ${isFavourite ? "active" : ""}`} onClick={() => setFavourite(!isFavourite)}>
                <Favorite />
            </div>

            <div className="img-card">
                <img src={imgSrc} alt="img" className='item-img' />
            </div>

            <div className="item-content">
                <h3 className="item-name">{name}</h3>
                <div className="bottom">
                    <div className="rating">
                        {Array.apply(null, { length: 5 }).map((e, i) => {
                            return (
                                <i key={i} className={`rating ${currentValue > i ? "red" : "gray"}`} onClick={() => handleClick(i + 1)}>
                                    <StarRounded />
                                </i>
                            )
                        })}
                        <h3 className="price"><span>$</span>{price}</h3>
                    </div>
                    <i className="add-to-cart" onClick={() => setCart(Items.find(n => n.id === itemId))}>
                        <AddRounded />
                    </i>
                </div>
            </div>

        </div>
    )
}

export default SubMenuItems;