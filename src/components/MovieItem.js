import React, { useEffect } from 'react';
import NotFoundImage from '../assets/images/not-found.jpg';

const MovieItem = ({movie, onMovieSelect, convertedDate, getMovieDetail, openModal}) => {

    // Get Image URL using image path or set default image
    const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : NotFoundImage;
    const rating = movie.vote_average * 10;

    //Return colour value between red and green depending on user rating percentage
    const ratingColor = () => {
        //Colour mapping to percentage taken from: https://stackoverflow.com/a/17267684
        let a = rating / 100,
        b = (120 - 0) * a,
        c = b + 0;
        return 'hsl('+c+', 100%, 50%)';
    }

    return (
        <>
        <div className="card movie-item" onClick={async() => {onMovieSelect(movie); await getMovieDetail(movie.id); await (openModal())}}>
            <img className="movie-card-poster" src={moviePoster} alt={movie.title} />
            <div className="card-body movie-item-content">
                <div>
                    <h6 className="card-title">{movie.title}</h6>
                    <p className="card-text">{convertedDate(movie.release_date)}</p>
                </div>
                
                { (rating > 0) ? <div className="movie-item-rating" style={{borderColor: ratingColor()}}>
                    <strong>{rating}</strong>
                </div> : null }
            </div>
        </div>
        </>
    )
}

export default MovieItem;