import { useState } from 'react';
import theMovieDB from '../api/tmdb';

const MovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const [searchMessage, setSearchMessage] = useState();

    const search = async (term) => {
        if(term){
            const res = await theMovieDB.get('/search/movie',{
                params: {
                    query: term
                }
            });
            const data = res.data.results;
            setMovies(data);

            //Set message depending on API Response
            const message = (data.length > 0 ) ? `Showing results for '${term}'` : `There are no search results for '${term}'. Please try again.`;
            setSearchMessage(message);
        }
        else{
            setSearchMessage("Please enter a valid search term");
        }
    }

    return { movies, search, searchMessage };
}

export default MovieSearch;