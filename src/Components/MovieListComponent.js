import React from 'react';
import {Link} from 'react-router-dom'
import MovieComponent from './MovieComponent';

const MovieListComponent = (props) => {
    const search = props.searchResult.Search
    const movieList = search === undefined ? console.log("no data") : search.map((data, index) => {
        return (
            // <Link key={index} to={{ pathname: '/DetailedMovieComponent', state: {movieSelected: data.Title}}}>
            <Link key={index} to={`/DetailedMovieComponent/${data.Title}`}>
                <MovieComponent
                    key={index}
                    img={data.Poster}
                    title={data.Title}
                    year={data.Year}
                    // setMovie={props.setMovie}
                />
            </Link>
        )
    })
    console.log(props)

    return (
        <div className='flex' >
            {movieList}
        </div>
    )

}


export default MovieListComponent;