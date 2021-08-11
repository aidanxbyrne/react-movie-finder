import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import './styles/App.css';
import SearchBar from './components/SearchBar';

const App = () => {
    // const [listOfMovies, setListofMovies] = useState(null);
    const { movies, search } = MovieSearch();

    return (
        <>
            <Navigation />
            <div className="content-body d-flex flex-column align-items-center justify-content-center">
                <SearchBar onSearchSubmit={search} />
                <MovieList movies={movies} /> 
            </div>
        </>
    )
}

export default App;