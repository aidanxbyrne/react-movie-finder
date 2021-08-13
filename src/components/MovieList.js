import React, {useState, useEffect} from 'react';
import MovieItem from './MovieItem';

export const MovieList = ({movies}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);

    const openMovieModal = (movie) =>{
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const renderedMovies = movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} onClick={openMovieModal(movie)} />
    })

    return <div className="movie-list container">{renderedMovies}</div>;
}

export {isModalOpen, selectedMovie};