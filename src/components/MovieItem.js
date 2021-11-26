import React from 'react';
import NotFoundImage from '../assets/images/not-found.jpg';

const MovieItem = ({movie, onMovieSelect, convertedDate, openModal}) => {

    // Get Image URL using image path or set default image
    const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : NotFoundImage;

    return (
        <>
        <div className="card movie-item" onClick={() => {onMovieSelect(movie); openModal()}}>
            <img className="movie-card-poster" src={moviePoster} alt={movie.title} />
            <div className="card-body">
                <h6 className="card-title">{movie.title}</h6>
                <p className="card-text">{convertedDate(movie.release_date)}</p>
            </div>
        </div>
        </>
    )
}

export default MovieItem;