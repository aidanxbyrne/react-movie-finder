import React, { useState } from 'react';
import theMovieDB from '../api/tmdb';

const SearchBar = ({ onSearchSubmit, getMovieDetail, openModal }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    }

    const onFormSubmit = (e) =>{
        e.preventDefault();
        onSearchSubmit(term);
        if(term){
            document.querySelector('.search-component').style.height="40vh";
        }
    };

    async function openRandomMovie(){
        //Get ID of most recent movie in database
        const res = await theMovieDB.get('movie/latest');

        //Find random ID between 1 and ID of most recent movie
        const randomID = Math.floor(Math.random() * `${res.data.id}`) + 1;

        try{
            await getMovieDetail(randomID);
            openModal();
        }
        catch{
            //If movie of random ID cannot be found, retry the function
            openRandomMovie()
        }
    }

    return (
        <>
        <div className="search-component d-flex flex-column align-items-center justify-content-center w-100">
            <h1 className="text-light mb-5">Find a Movie</h1>
            
            <form className="search-component-form" onSubmit={onFormSubmit}>
                <input 
                className="main-search-bar search-bar" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                value={term}
                onChange={onInputChange}
                />
                <button className="nav-btn search-bar-btn" type="submit"><i className="fas fa-search"></i></button>
            </form>

            <button className="main-btn" type="submit" onClick={() => {openRandomMovie();}}>Random Movie</button>
        </div>
        </>
    )
}

export default SearchBar;