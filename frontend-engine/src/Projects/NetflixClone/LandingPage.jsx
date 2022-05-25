import React from 'react';
import Header from './Components/Header/Header';
import Banner from "./Components/Banner/Banner";
import "../Styles/Common.css";
import Row from './Components/Row/Row';
import requests from './APIRequest/APIRequest';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Row
                isLargeRow={true}
                title="Netflix Originals"
                fetchUrl={requests.fetchNetFlixOriginals}
            />
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTreding}
            />
            <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorroMovies}
            />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanticMovies}
            />
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default LandingPage;