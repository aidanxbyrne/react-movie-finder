import React from 'react'

const MovieSearch = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-light mb-5">Find a Movie</h1>
            
            <form className="d-flex mb-5">
                <input className="main-search-bar search-bar" type="search" placeholder="Search" aria-label="Search" />
                <button className="nav-search-btn" type="submit"><i class="fas fa-search"></i></button>
            </form>

            <button className="main-btn" type="submit">Random Movie</button>
        </div>
    )
}

export default MovieSearch;