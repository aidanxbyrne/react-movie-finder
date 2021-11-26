import React from 'react';
import { useState, useEffect } from 'react';
import NotFoundImage from '../assets/images/not-found.jpg';
import theMovieDB from '../api/tmdb';

const MovieModal = ({selectedMovie, convertedDate}) => {

    const [selectedMovieDetail, setSelectedMovieDetail] = useState([]);

    //Get Detiled Movie Information
    const getSelectedMovieDetails = async (selectedMovie) =>{
        if(selectedMovie){
            const movieResponse = await theMovieDB.get(`/movie/${selectedMovie.id}`),
                creditResponse = await theMovieDB.get(`/movie/${selectedMovie.id}/credits`);
                // videoResponse = await theMovieDB.get(`/movie/${selectedMovie.id}/videos`);

            const movie = await movieResponse.data,
                credit = await creditResponse.data.crew;
                // video = await videoResponse.data;

            const title = movie.title,
                director = getDirector(credit),
                date = convertedDate,
                runtime = movie.runtime,
                overview = movie.overview,
                budget = movie.budget,
                genres = movie.genres

            setSelectedMovieDetail({title, director, date, runtime, overview, budget, genres});
        };
    }

    //Retrieve director from API response
    const getDirector = (movie) => {
        let director;

        movie.forEach(crew => {
            if(crew.job === "Director"){
                director = crew.name;
            }
        });

        return director;
    }

    //Run function on first render
    useEffect(()=>{
        getSelectedMovieDetails(selectedMovie);
    }, []);

    return (
        <div className="modal-main">
            <div className="modal-card card ">
                <div className="modal-card-image">
                    <img src={selectedMovie.poster_path ? `https://image.tmdb.org/t/p/w342/${selectedMovie.poster_path}` : NotFoundImage} className="img h-100 rounded-start" alt="..." />
                </div>
                <div className="modal-card-body card-body p-4">
                    <div className="modal-card-content modal-content-head">
                        <div className="modal-content-head-left">
                            <h2>{selectedMovieDetail.title}</h2>
                            <p>{selectedMovieDetail.date}</p>
                        </div>
                        <div className="modal-content-head-right modal-tags"></div>
                    </div>
                    <div className="smodal-card-content">
                        <h3>Overview</h3>
                        <p>{selectedMovieDetail.overview}</p>
                    </div>
                    <div className="modal-card-content">
                        <h4>Director</h4>
                        <p>{selectedMovieDetail.director}</p>
                        <h4>Language</h4>
                        <p>{selectedMovie.original_title}</p>
                        <h4>Budget</h4>
                        <p>${selectedMovieDetail.budget}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal;