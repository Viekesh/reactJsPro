import React, { useEffect, useState } from 'react';
import axios from '../../../../axios';
import "./Row.css";



const baseUrl = "https://image.tmdb.org/t/p/original";

// above base url is different from the url mentioned in the axios.

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className='row'>
            <h3>{title}</h3>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        // onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row;