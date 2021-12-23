import React, { useState, useContext } from "react";
import theMovieDB from "../api/tmdb";
import MovieContext from "../context/MovieContext";
import MovieSearchContext from "../context/MovieSearchContext";

const SearchBar = () => {
  const { openModal, getSelectedMovieDetail } = useContext(MovieContext);
  const { search } = useContext(MovieSearchContext);
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    search(term);
    if (term) {
      document.querySelector(".search-component").style.height = "40vh";
    }
  };

  async function openRandomMovie() {
    //Get ID of most recent movie in database
    const res = await theMovieDB.get("movie/latest");

    //Find random ID between 1 and ID of most recent movie
    const randomID = Math.floor(Math.random() * `${res.data.id}`) + 1;

    try {
      openModal();
      getSelectedMovieDetail(randomID);
    } catch {
      //If movie of random ID cannot be found, retry the function
      openRandomMovie();
    }
  }

  return (
    <>
      <div className="search-component">
        <h1>Find a Movie</h1>

        <form className="search-component-form" onSubmit={onFormSubmit}>
          <input
            className="search-bar"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={term}
            onChange={onInputChange}
          />
          <button className="btn nav-btn search-bar-btn" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>

        <button
          className="btn main-btn"
          type="submit"
          onClick={() => {
            openRandomMovie();
          }}
        >
          Random Movie
        </button>
      </div>
    </>
  );
};

export default SearchBar;
