import React, { useState } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom'
import './App.css';
import SearchCompoenent from './Components/SearchComponent'
import MovieListComponent from './Components/MovieListComponent';
import DetailedMovieComponent from './Components/DetailedMovieComponent'

function App() {

  const [movieSearched, setMovieSearched] = useState({})
  const [searchResult, setSearchResult] = useState([])

  return (
    <div className="App">
      <Link to='/MovieListComponent' >Home</Link>
      <SearchCompoenent 
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <Switch>
        <Route exact path='/DetailedMovieComponent/:title'>
          <DetailedMovieComponent movieSearched={movieSearched} />
        </Route>
        <Route exact path='/MovieListComponent'>
            <MovieListComponent searchResult={searchResult} setMovieSearched={setMovieSearched} />
        </Route>
        <Redirect from='/DetailedMovieComponent/:title' to='/MovieListComponent'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
