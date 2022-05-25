import React from 'react';
// import axios from 'axios';
// import requests from '../../APIRequest/APIRequest';
import "./Banner.css";

const Banner = () => {

    // const [movie, setMovie] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(requests.fetchNetFlixOriginals)

    //         setMovie(request.data.results[
    //             Math.floor(Math.random() * request.data.results.length)
    //         ])
    //         return request;
    //     }
    //     fetchData();
    // }, [])
    // console.log(movie);

    return (
        <div
            className='banner x-y-axis-center'
        // style={{
        //     backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
        // }}
        >
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