import React from 'react';
import NotFoundImage from '../assets/images/not-found.jpg';

const MovieModal = ({selectedMovie, convertedDate}) => {


    return (
        <div className="position-fixed w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center" style={{zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className="card d-flex flex-row position-relative rounded-3 p-0 m-3 w-100" style={{ height: '600px', maxWidth: '1024px'}}>
                <div className="modal-image">
                    <img src={selectedMovie.poster_path ? `https://image.tmdb.org/t/p/w342/${selectedMovie.poster_path}` : NotFoundImage} className="img h-100 rounded-start" alt="..." />
                </div>
                <div className="card-body p-4">
                    <div className="selected-content selected-content-head">
                        <div className="selected-content-head-left">
                            <h2>{selectedMovie.original_title}</h2>
                            <p>{convertedDate}</p>
                        </div>
                        <div className="selected-content-head-right selected-tags"></div>
                    </div>
                    <div className="selected-content">
                        <h3>Overview</h3>
                        <p>{selectedMovie.overview}</p>
                    </div>
                    <div className="selected-content">
                        <h4>Director</h4>
                        <p>selectedMovie.original_title</p>
                        <h4>Language</h4>
                        <p>selectedMovie.original_title</p>
                        <h4>Budget</h4>
                        <p>selectedMovie.original_title</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal;