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
<<<<<<< HEAD
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedMovie, setSelectedMovie] = useState(movies[0]);
=======
    const [isModalOpen, setMovieModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const openMovieModal = (movie) => {
        setMovieModal(true);
        setSelectedMovie(movie);
    }

    useEffect(()=>{
        console.log(isModalOpen);
    }, [isModalOpen])
>>>>>>> parent of c8cf172 (Added modal content)

    return (
        <>
            {isModalOpen && <MovieModal selectedMovie={selectedMovie} />}
            <Navigation />
            <div className="content-body d-flex flex-column align-items-center justify-content-center">
                <SearchBar onSearchSubmit={search} />
                <MovieList movies={movies} /> 
            </div>
<<<<<<< HEAD
            {selectedMovie && <MovieModal isModalOpen={isModalOpen} selectedMovie={selectedMovie} />}
=======
>>>>>>> parent of c8cf172 (Added modal content)
        </>
    )
}

export default App;





