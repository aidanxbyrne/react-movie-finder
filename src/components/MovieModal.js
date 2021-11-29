import React from 'react';
import NotFoundImage from '../assets/images/not-found.jpg';
import GenreTag from './modal/GenreTag';

const MovieModal = ({convertedDate, movie, setMovieModal}) => {
    
    const renderedGenres = movie.genres.map(genre => {
        return <GenreTag key={genre.id} genre={genre.name} />
    })

    return (
        <div className="modal-main">
            <div className="modal-card card ">
                <div className="modal-close-btn" onClick={setMovieModal}>X</div>
                <div className="modal-card-image">
                    <img src={movie.poster ? `https://image.tmdb.org/t/p/w342/${movie.poster}` : NotFoundImage} className="img h-100 rounded-start" alt="..." />
                </div>
                <div className="modal-card-body card-body p-4">
                    <div className="modal-card-content modal-content-head">
                        <div className="modal-content-head-left">
                            <h2>{movie.title}</h2>
                            <p>{convertedDate}</p>
                        </div>
                        <div className="modal-content-head-right modal-tags">{renderedGenres}</div>
                    </div>
                    <div className="modal-card-content">
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="modal-card-content modal-content-info">
                        <div>
                            <h5>Director</h5>
                            <p>{movie.director}</p>
                        </div>
                        <div>
                            <h5>Language</h5>
                            <p>{movie.language}</p>
                        </div>
                        <div>
                            <h5>Budget</h5>
                            <p>${movie.budget}</p> 
                        </div>
                    </div>
                    <div className="modal-card-content">
                        {movie.trailer && <button className="main-btn" id="trailerButton" onClick={() => window.open(movie.trailer)}>Watch Trailer</button>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieModal;