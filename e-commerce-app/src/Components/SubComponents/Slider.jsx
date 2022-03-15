import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Slider.css';


const Slider = ({ Images }) => {
    return (
        <Carousel fade>

            {
                Images.map((item) => (
                    <Carousel.Item>
                        <img src={item} alt="First Slide" className='landing_page_carousel' />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Slider