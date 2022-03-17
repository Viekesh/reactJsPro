import React from 'react';
import Navigation from './SubComponents/Navigation';
import Slider from './SubComponents/Slider';
import Data from '../Data.json';
import '../Data.json';
import '../Components/Styles/CommonStyles.css';
import { products } from './SubComponents/ProductData';
import Product from './SubComponents/Product';
import '../Components/Styles/LandingPage.css';
import BackToTop from './SubComponents/BackToTop';


const LandingPage = () => {
    return (
        <div className='landing_page'>
            <header>
                <Navigation />
                <Slider Images={Data.LandingPageCarousel.Start} />
            </header>
            <main>
                <section className="home_row flex">
                    {products.slice(0, 2).map((item) => (
                        <Product
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            specification={item.specification}
                            detail={item.detail}
                        />
                    ))}
                </section>
                <section className="home_row flex">
                    {products.slice(2, 5).map((item) => (
                        <Product
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            specification={item.specification}
                            detail={item.detail}
                        />
                    ))}
                </section>
                <section className="home_row flex">
                    {products.slice(5, 6).map((item) => (
                        <Product
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            specification={item.specification}
                            detail={item.detail}
                        />
                    ))}
                </section>
                <BackToTop />
            </main>
        </div>
    )
}

export default LandingPage;