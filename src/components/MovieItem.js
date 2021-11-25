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

   const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : NotFoundImage;

    return (
        <>
        {/* <div className="card movie-item" onClick={() => onMovieSelect(movie)} data-bs-toggle="modal" data-bs-target="#exampleModal"> */}
        <div className="card movie-item" onClick={() => onMovieSelect(movie)}>
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