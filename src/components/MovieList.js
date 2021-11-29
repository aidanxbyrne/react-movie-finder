import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({movies, onMovieSelect, convertedDate, getMovieDetail, openModal, searchMessage}) => {

    const renderedMovies = movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} onMovieSelect={onMovieSelect} convertedDate={convertedDate} getMovieDetail={getMovieDetail} openModal={openModal} />
    })
    
    return (
    <div className="container">
        <h3 className="text-light mb-4 text-center">{searchMessage}</h3>
        <div className="movie-list">{renderedMovies}</div>
    </div>
    )
}

export default MovieList;