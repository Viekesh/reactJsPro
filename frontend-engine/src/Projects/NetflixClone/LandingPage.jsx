import React from 'react';
import Header from './Components/Header/Header';
import Banner from "./Components/Banner/Banner";
import "../Styles/Common.css";
import Row from './Components/Row/Row';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Row />
        </div>
    )
}

export default LandingPage;