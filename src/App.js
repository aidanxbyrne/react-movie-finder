import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import MovieModal from './components/MovieModal';

const App = () => {
    // const [listOfMovies, setListofMovies] = useState(null);
    const { movies, search } = MovieSearch();
    const [isModalOpen, setMovieModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const openMovieModal = (movie) => {
        setMovieModal(true);
        setSelectedMovie(movie);
    }

    useEffect(()=>{
        console.log(isModalOpen);
    }, [isModalOpen])

    return (
        <>
            {isModalOpen && <MovieModal selectedMovie={selectedMovie} />}
            <Navigation />
            <div className="content-body d-flex flex-column align-items-center justify-content-center">
                <SearchBar onSearchSubmit={search} />
                <MovieList movies={movies} onMovieSelect={(movie) => openMovieModal(movie)}/> 
            </div>
        </>
    )
}

export default App;





