import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import MovieModal from './components/modal/MovieModal';

import './styles/App.css';

const App = () => {
    const { movies, search } = MovieSearch();
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedMovie, setSelectedMovie] = useState(movies[0]);

    return (
        <>
            <Navigation />
            <div className="content-body d-flex flex-column align-items-center justify-content-center">
                <SearchBar onSearchSubmit={search} />
                <MovieList movies={movies} /> 
            </div>
            {selectedMovie && <MovieModal isModalOpen={isModalOpen} selectedMovie={selectedMovie} />}
        </>
    )
}

export default App;





