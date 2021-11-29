import { useState } from 'react';
import theMovieDB from './tmdb';

const MovieDetail = () => {
    const [selectedMovieDetail, setSelectedMovieDetail] = useState([]);

    //Get Detiled Movie Information
    const getSelectedMovieDetail = async (id) =>{
        if(id){
            const movieResponse = await theMovieDB.get(`/movie/${id}`),
                creditResponse = await theMovieDB.get(`/movie/${id}/credits`),
                videoResponse = await theMovieDB.get(`/movie/${id}/videos`);

            const movie = await movieResponse.data,
                credit = await creditResponse.data.crew,
                video = await videoResponse.data.results;

            const title = movie.title,
            overview = movie.overview,
            date = movie.release_date,
            runtime = movie.runtime,
            director = getDirector(credit),
            budget = movie.budget,
            genres = movie.genres,
            poster = movie.poster_path,
            language = getLanguage(movie),
            trailer = getTrailer(video);

            setSelectedMovieDetail({title, overview, date, runtime, director, budget, genres, poster, language, trailer});
        };
    }

    //Get Director from credits response - Check each member of the crew to see if they're the director
    function getDirector(crew){
        let _director;

        if(crew.length > 0){
            crew.forEach(crewMember => {
                if(crewMember.job === "Director"){
                    _director = crewMember.name
                }
            });
        }
        else{ _director = "Unknown"}
        
        return _director;
    }

    //Get Language
    const getLanguage = (movie) => {
        let _language

        //If movie has languages, check each of those languages. Then check if the iso_639_1 code of those languages matches the code of the movie original lanagues. If yes, return the English name of that language
        if(movie.spoken_languages.length > 0){
            movie.spoken_languages.forEach(language => {
                if(language.iso_639_1 === movie.original_language){
                    _language = language.english_name;
                }
            })
        }
        else{_language = "Unknown"}
        
        return _language;
    }

    //Get Trailer video for movie
    const getTrailer = video => {
        let _trailer;

        if(video.length > 0){
            switch(video[0].site){
                case "YouTube": _trailer = `https://www.youtube.com/watch?v=${video[0].key}`; break;
                case "Vimeo": _trailer = `https://vimeo.com/${video[0].key}`; break;
                default: _trailer = '';
            }
        }
        else{ _trailer = null; }

        return _trailer
    }
    
    return {selectedMovieDetail, getSelectedMovieDetail}
}

export default MovieDetail;
