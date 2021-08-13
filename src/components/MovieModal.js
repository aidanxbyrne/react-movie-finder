import React from 'react'

const MovieModal = ({selectedMovie}) => {

    return (
        <div className="modal fade" id="exampleModal" tabIndex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <h2>{selectedMovie.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default MovieModal;