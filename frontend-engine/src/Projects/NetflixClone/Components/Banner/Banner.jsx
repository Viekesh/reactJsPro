import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className='banner x-y-axis-center'>
            <div className="banner_contents x-y-axis-center">
                <h1 className="header_title">Unlimited movies, TV shows and more.</h1>
                <div className="header_btn y-axis-center">
                    <div className="play_btn">Play</div>
                    <div className="list_btn">My List</div>
                </div>
                <div className="banner_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, a autem! Natus molestiae temporibus facere odio velit? Beatae, quam nisi?</div>
            </div>
            <div className="banner_fadebottom"></div>
        </div>
    )
}

export default Banner;