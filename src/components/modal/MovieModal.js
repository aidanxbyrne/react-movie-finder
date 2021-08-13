import React from 'react'

const MovieModal = ({isModalOpen, setIsModalOpen, selectedMovie}) => {
    // TODO:
    // - Add modal close
    // - API call to pull additional info on selected movie such as director and budget
    // - Convert extra info to component
    // - Conditionally load extra as components if information exists
    // - Add trailer button
    if(isModalOpen){
       return (
        // <div className="modal fade" id="exampleModal" tabIndex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal fade" id="exampleModal" tabIndex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content d-flex flex-row">
                    <div className="modal-image">
                        <img src={`https://image.tmdb.org/t/p/w342/${selectedMovie.poster_path}`} className="rounded-start" />
                    </div>
                    <div className="modal-info p-4">
                        <div className="modal-info-top">
                            <h2>{selectedMovie.title}</h2>
                            <p>{selectedMovie.release_date}</p>
                        </div>
                        <div className="modal-info-overview">
                            <h5>Overview</h5>
                            <p>{selectedMovie.overview}</p>
                        </div>
                        <div className="modal-info-extra d-flex">
                            <div className="modal-info-extra-item me-4">
                                <h6>Director</h6>
                                <p>Director Name</p>
                            </div>
                            <div className="modal-info-extra-item me-4">
                                <h6>Language</h6>
                                <p>English</p>
                            </div>
                            <div className="modal-info-extra-item">
                                <h6>Production Budget</h6>
                                <p>$356000000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) 
    }
    else{
        return <div></div>
    }
    
}

export default MovieModal;