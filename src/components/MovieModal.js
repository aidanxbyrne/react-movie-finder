import React from 'react';
import NotFoundImage from '../assets/images/not-found.jpg';

const MovieModal = ({selectedMovie, convertedDate, selectedMovieDetails}) => {

    return (
        <div className="modal-main">
            <div className="modal-card card ">
                <div className="modal-card-image">
                    <img src={selectedMovie.poster_path ? `https://image.tmdb.org/t/p/w342/${selectedMovie.poster_path}` : NotFoundImage} className="img h-100 rounded-start" alt="..." />
                </div>
                <div className="modal-card-body card-body p-4">
                    <div className="modal-card-content modal-content-head">
                        <div className="modal-content-head-left">
                            <h2>{selectedMovie.original_title}</h2>
                            <p>{convertedDate}</p>
                        </div>
                        <div className="modal-content-head-right modal-tags"></div>
                    </div>
                    <div className="smodal-card-content">
                        <h3>Overview</h3>
                        <p>{selectedMovie.overview}</p>
                    </div>
                    <div className="modal-card-content">
                        <h4>Director</h4>
                        <p>{selectedMovieDetails}</p>
                        <h4>Language</h4>
                        <p>{selectedMovie.original_title}</p>
                        <h4>Budget</h4>
                        <p>{selectedMovie.original_title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal;