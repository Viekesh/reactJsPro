import React, { useState } from 'react'
import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import '../Styles/ItemCard.css';



const ItemCard = ({ imgSrc, name, rating, price, itemId }) => {

    const [isFavourite, setFavourite] = useState(false);

    const [currentValue, setCurrentValue] = useState(Math.floor(rating));

    const handleClick = (value) => {
        setCurrentValue(value);
    }

    return (
        <div className='itemCard' id={itemId}>

            <div className={`isFavourite ${isFavourite ? "active" : ""}`} onClick={() => setFavourite(!isFavourite)}>
                <Favorite />
            </div>

            <div className="imgBox">
                <img src={imgSrc} alt="foodImg" className='itemImg' />
            </div>

            <div className="itemContent">
                <h3 className='itemName'>{name}</h3>
                <div className="bottom">
                    <div className="rating">
                        {Array.apply(null, { length: 5 }).map((e, i) => (

                            // Inside here what we are going to do is we are going to do
                            // We have the "i" tag and this "i" tag we are going to use key as
                            // the index and then we are going to have the "StarRounded" it
                            // should create five different stars now
                            // So actually what we are having here is we are creating an array
                            // initially it's null and we are fixing the length that five and we
                            // are forEach, that element index inside it we are creating an 
                            // element and we are creating an index, to monitor the index, to
                            // maintain it unique key and we giving that keys to icon and it's
                            // having this star routed...okay cool......

                            <i key={i} className={`rating ${currentValue > i ? "orange" : "gray"}`} onClick={() => handleClick(i + 1)}>
                                <StarRounded />
                            </i>
                        ))}

                        <h3 className="price"><span>$</span>{price}</h3>
                    </div>

                    <i className="addToCart">
                        <AddRounded />
                    </i>

                </div>
            </div>

        </div>
    )
}

export default ItemCard;