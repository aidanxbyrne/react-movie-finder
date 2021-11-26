import { useState } from "react";
import theMovieDB from '../../api/tmdb';

const MovieDetail = () =>{
    const [selectedMovieDetail, setSelectedMovieDetail] = useState([]);

    //Get Detiled Movie Information
    const getSelectedMovieDetails = async (selectedMovie) =>{
        if(selectedMovie){
            // const movieResponse = await theMovieDB.get(`/movie/${selectedMovie.id}`),
            const creditResponse = await theMovieDB.get(`/movie/${selectedMovie.id}/credits`);
            //     videoResponse = await theMovieDB.get(`/movie/${selectedMovie.id}/videos`);

            // const movie = await movieResponse.data,
            //     credit = await creditResponse.data,
            //     video = await videoResponse.data;

            // const response = {movie, credit, video}
            
            const response = creditResponse.data;

            setSelectedMovieDetail(response);
        };
    }

    console.log(selectedMovieDetail);
    return {selectedMovieDetail, getSelectedMovieDetails}
}

export default MovieDetail;