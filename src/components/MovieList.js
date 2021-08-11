import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import MovieSearch from './MovieSearch';

const MovieList = ({movies}) => {

    const renderedMovies = movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />
    })

    return <div className="movie-list container">{renderedMovies}</div>
}

export default MovieList;