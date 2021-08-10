import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a className="nav-logo" href="http://localhost:3000/">Movie Finder</a>

                <form id="movie-search-form" className="d-flex">
                    <input className="search-bar" type="search" placeholder="Search" aria-label="Search" />
                    <button className="nav-search-btn" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navigation;