import React, { useEffect, useState } from 'react';
import {useLocation, useParams} from 'react-router-dom';

const DetailedMovieComponent = (props) => {

    const [movie, setMovie] = useState({});
    const location = useLocation();
    const {title} = useParams();

    useEffect(() => {
        console.log(title)
        fetch(`http://www.omdbapi.com/?t=${title.trim()}&apikey=8e07f126`)
            .then(response => response.json())
            .then(data => setMovie(data))
    },[])


    return (
        <div className='space' >
            <div>
                <img src={movie.Poster} />
            </div>
            <div>
                <h1>{movie.Title}</h1>
                <h1>{movie.Year}</h1>
                <h1>Rated {movie.Rated}</h1>
                <h1>{movie.Genre}</h1>
                <h3>{movie.Plot}</h3>
                <h3>{movie.Actors}</h3>
            </div>
        </div>
    )

}

export default DetailedMovieComponent;