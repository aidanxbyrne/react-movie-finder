import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import './styles/App.css';
import theMovieDB from './api/tmdb';
import SearchBar from './components/SearchBar';
import MovieModal from './components/MovieModal';

const App = () => {
    // const [listOfMovies, setListofMovies] = useState(null);
    const { movies, search } = MovieSearch();
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

    //Get Detiled Movie Information
    async function getSelectedMovieDetails(selectedMovie){
        if(selectedMovie){
            const movieResponse = await theMovieDB.get(`/movie/${selectedMovie.id}`);
            const creditResponse = await theMovieDB.get(`/movie/${selectedMovie.id}/credits`);
            const videoResponse = await theMovieDB.get(`/movie/${selectedMovie.id}/videos`);

            const response = {
                "movie" : await movieResponse.data,
                "credit" : await creditResponse.data,
                "video" : await videoResponse.data
            }

            setMovieModal(true);
            console.log(response);
            return response;
        };
    }

    // function getDirector(movie){
    //     movie.credit.crew.forEach(crew => {
    //         if(crew.job === "Director"){
    //             return crew.name
    //         }
    //     });
    // }




    //When selected movie is updated
    useEffect(()=>{
        getSelectedMovieDetails(selectedMovie)
    }, [selectedMovie]);

    useEffect(() => {
    }, [selectedMovieDetails]);

    return (
        <>
            {isModalOpen && setSelectedMovieDetails && <MovieModal selectedMovie={selectedMovie} convertedDate={convertedDate(selectedMovie.release_date)} selectedMovieDetails={selectedMovieDetails}/>}
            <Navigation />
            <div className="content-body d-flex flex-column align-items-center justify-content-center">
                <SearchBar onSearchSubmit={search} />
                <MovieList movies={movies} onMovieSelect={(movie) => setSelectedMovie(movie)} convertedDate={date => convertedDate(date)} /> 
            </div>
        </>
    )
}

export default App;





