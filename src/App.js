import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import './styles/App.css';
import theMovieDB from './api/tmdb';
import SearchBar from './components/SearchBar';
import MovieModal from './components/MovieModal';
import MovieDetail from './components/modal/MovieDetail';

const App = () => {
    // const [listOfMovies, setListofMovies] = useState(null);
    const { movies, search } = MovieSearch();
    const {selectedMovieDetail, getSelectedMovieDetails } = MovieDetail();
    const [isModalOpen, setMovieModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);

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

    // function getDirector(movie) {
    //     movie.credit.crew.forEach(crew => {
    //         if(crew.job === "Director"){
    //             return crew.name;
    //         }
    //     });
    // }

    // //Get Detiled Movie Information
    // const getSelectedMovieDetails = async (selectedMovie) =>{
    //     if(selectedMovie){
    //         const movieResponse = await theMovieDB.get(`/movie/${selectedMovie.id}`),
    //             creditResponse = await theMovieDB.get(`/movie/${selectedMovie.id}/credits`),
    //             videoResponse = await theMovieDB.get(`/movie/${selectedMovie.id}/videos`);

    //         const movie = movieResponse.data,
    //             credit = creditResponse.data,
    //             video = videoResponse.data;

    //         const response = [movie, credit, video]
            
    //         setSelectedMovieDetails(response);
    //     };
    // }

    //When selected movie is updated
    useEffect(()=>{
    }, [selectedMovie]);

    useEffect(() => {
        setMovieModal(true);
    }, [selectedMovieDetails]);

    return (
        <>
            {isModalOpen && selectedMovie && <MovieModal selectedMovie={selectedMovie} convertedDate={convertedDate(selectedMovie.release_date)} />}
            <Navigation />
            <div className="content-body d-flex flex-column align-items-center justify-content-center">
                <SearchBar onSearchSubmit={search} />
                <MovieList movies={movies} onMovieSelect={(movie) => setSelectedMovie(movie)} convertedDate={date => convertedDate(date)} getSelectedMovieDetails={getSelectedMovieDetails} /> 
            </div>
        </>
    )
}

export default App;





