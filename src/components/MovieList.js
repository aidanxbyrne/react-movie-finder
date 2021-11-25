import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({movies, onMovieSelect, convertedDate}) => {

    const renderedMovies = movies.map(movie => {
        // return <MovieItem key={movie.id} movie={movie} onMovieSelect={onMovieSelect} />
        return <MovieItem key={movie.id} movie={movie} onMovieSelect={onMovieSelect} convertedDate={convertedDate} />
    })

    return <div className="movie-list container">{renderedMovies}</div>;
}

export default MovieList;