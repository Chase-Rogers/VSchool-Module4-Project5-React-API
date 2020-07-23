import React from 'react';

const MovieComponent = (props) => {

    const movieClicked = (e, props) => {
        e.preventDefault()
        
        // fetch(`http://www.omdbapi.com/?t=${props.title}&apikey=8e07f126`)
        // .then(response => response.json())
        // .then(data => props.setMovie(data))
       console.log('this', props.title)
    }


    console.log(props)
    return (
        <div className='space' >
            <div>
                <img src={props.img} />
            </div>
            <div>
                <h1>{props.title}</h1>
                <h1>{props.year}</h1>
            </div>
        </div>
    )

}

export default MovieComponent;