import { useState } from 'react';
import theMovieDB from '../api/tmdb';

const MovieSearch = () => {
    const [movies, setMovies] = useState([]);

    const search = async (term) => {
        if(term){
            const res = await theMovieDB.get('/search/movie',{
                params: {
                    query: term
                }
            });
            
            setMovies(res.data.results);
        };
    }

    // console.log(movies);
    
    return { movies, search };
}

export default MovieSearch;