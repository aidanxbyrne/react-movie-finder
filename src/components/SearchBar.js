import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
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
                <button className="nav-search-btn" type="submit"><i className="fas fa-search"></i></button>
            </form>

            <button className="main-btn" type="submit">Random Movie</button>
        </div>
        </>
    )
}

export default SearchBar;