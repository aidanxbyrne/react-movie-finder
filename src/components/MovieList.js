import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({movies, onMovieSelect}) => {

    const renderedMovies = movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} onMovieSelect={onMovieSelect} />
    })

    return <div className="movie-list container">{renderedMovies}</div>;
}

export default MovieList;