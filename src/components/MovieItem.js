import React from 'react';
import NotFoundImage from '../assets/images/not-found.jpg'

const MovieItem = ({movie, onMovieSelect}) => {
    /*
    movie.id
    movie.title
    movie.overview
    movie.poster_path
    movie.release_date
    movie.video
    movie.vote_average
    movie.genre_ids
    */

   const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : NotFoundImage;

    return (
        <>
        {/* <div className="card movie-item" onClick={() => onMovieSelect(movie)} data-bs-toggle="modal" data-bs-target="#exampleModal"> */}
        <div className="card movie-item">
            <img className="movie-card-poster" src={moviePoster} alt={movie.title} />
            <div className="card-body">
                <h6 className="card-title">{movie.title}</h6>
                <p className="card-text">{movie.release_date}</p>
            </div>
        </div>
        </>
    )
}

export default MovieItem;