import { AddRounded, RemoveRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';



let cartItems = [];

const CartItem = ({ name, imgSrc, price, itemId }) => {

    const [qty, setQty] = useState(1);

    const updateQuantity = (action, id) => {
        if (action === "add") {
            setQty(qty + 1);
        } else {
            setQty(qty - 1);
        }
    }

    const [{ cart }, dispatch] = useStateValue();

    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

    useEffect(() => {
        cartItems = cart;
    }, [])

    return (
        <div className='cart-item'>
            <div className="img-box">
                <img src={imgSrc} alt="" />
            </div>

            <div className="item-section">
                <div className="item-name">{name}</div>
                <div className="item-quantity">
                    <span>{qty}</span>
                    <div className="quantity">
                        <RemoveRounded onClick={() => updateQuantity("remove", itemId)} />
                        <AddRounded onClick={() => updateQuantity("add", itemId)} />
                    </div>
                </div>
            </div>

            <p className="item-price">
                <span className="dolor">$</span>
                <span className="item-price-value">{price}</span>
            </p>
        </div>
    )
}

export default CartItem;