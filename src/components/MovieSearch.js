import React, {useState} from 'react';
import theMovieDB from '../api/tmdb';

const MovieSearch = () => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    }

    const onFormSubmit = (e) =>{
        e.preventDefault();
        search(term);
    };

    const search = async (term) => {
        if(term){
            const res = await theMovieDB.get('/search/movie',{
                params: {
                    query: term
                }
            });

            console.log(res);
        }

    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-light mb-5">Find a Movie</h1>
            
            <form className="d-flex mb-5" onSubmit={onFormSubmit}>
                <input 
                className="main-search-bar search-bar" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                value={term}
                onChange={onInputChange}
                />
                <button className="nav-search-btn" type="submit"><i className="fas fa-search"></i></button>
            </form>

            <button className="main-btn" type="submit">Random Movie</button>
        </div>
    )
}

export default MovieSearch;