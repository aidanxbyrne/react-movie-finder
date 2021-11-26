import React, { useState } from 'react';
import Navigation from './components/Navigation';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import MovieModal from './components/MovieModal';

const App = () => {
    const { movies, search } = MovieSearch();
    const [isModalOpen, setMovieModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Convert date format from YYYY-MM-YYYY to DD/MM/YYYY
    const convertedDate = date => {
        if(date === null || date === ""){
            return "";
        }
        else{
            let releaseDay = date.substring(8,10);
            let releaseMonth = date.substring(5, 7);
            let releaseYear = date.substring(0, 4);
            return `${releaseDay}/${releaseMonth}/${releaseYear}`;
        }
    };

    return (
        <>
            {isModalOpen && selectedMovie && <MovieModal selectedMovie={selectedMovie} convertedDate={convertedDate(selectedMovie.release_date)} />}
            <Navigation />
            <div className="content-body d-flex flex-column align-items-center justify-content-center">
                <SearchBar onSearchSubmit={search} />
                <MovieList movies={movies} onMovieSelect={(movie) => setSelectedMovie(movie)} convertedDate={date => convertedDate(date)} openModal={() => setMovieModal(true)}/> 
            </div>
        </>
    )
}

export default App;





