import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

const SearchComponent = (props) => {
    const [term, setTerm] = useState('')
    
    const search = (e, props) => {
        e.preventDefault()       
        fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(term.trim())}&apikey=8e07f126`)
            .then(response => response.json())
            .then(data => props.setSearchResult(data))
        return <Redirect to='/MovieListComponent' />
    }
    
    const handleChange = (event) => {
        const {value} = event.target
        setTerm(prevState => {
            return (
            prevState = value)
        })
    }

    return (
        <form onSubmit={ (e) => {search(e, props)}}>
            <input onChange={handleChange} placeholder='Search'/>
            <button>Submit</button>
        </form>
    )
}

export default SearchComponent;