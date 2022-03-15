import React from "react";
import "../Styles/Product.css";
import { Link } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const Product = ({
    id,
    title,
    image,
    price,
    rating,
    specification,
    detail,
}) => {
    return (
        <div className="product">
            <div className="info">
                <Link to={`/products/${id}`} className="title">
                    <p>{title}</p>
                </Link>
                <p className="price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="rating">
                    {Array(rating)
                        .fill()
                        .map((_, index) => (
                            <p key={index}>
                                <StarBorderOutlinedIcon />
                            </p>
                        ))}
                </div>
            </div>
            <img src={image} alt="Product_Image" />
            <button className="button">Add To Cart</button>

        </div>
    );
};

export default Product;
