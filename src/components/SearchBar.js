import React, { useState, useContext } from "react";
import theMovieDB from "../api/tmdb";
import MovieContext from "../context/MovieContext";
import {
  searchMovies,
  getMovie,
  getFullMovie,
} from "../context/MovieFunctions";

const SearchBar = () => {
  const { dispatch } = useContext(MovieContext);
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (term) {
      dispatch({ type: "SET_LOADING" });
      const movies = await searchMovies(term);
      dispatch({ type: "SEARCH_MOVIES", payload: movies });
      document.querySelector(".search-component").style.height = "40vh";

      movies.length > 0
        ? dispatch({
            type: "SET_SEARCH_MESSAGE",
            payload: `Showing results for '${term}'`,
          })
        : dispatch({
            type: "SET_SEARCH_MESSAGE",
            payload: `There are no search results for '${term}'. Please try again.`,
          });
    } else {
      dispatch({
        type: "SET_SEARCH_MESSAGE",
        payload: "Please enter a valid search term",
      });
    }
  };

  async function openRandomMovie() {
    //Get ID of most recent movie in database
    const res = await theMovieDB.get("movie/latest");
    //Find random ID between 1 and ID of most recent movie
    const randomID = Math.floor(Math.random() * `${res.data.id}`) + 1;

    dispatch({ type: "OPEN_MODAL" });
    dispatch({ type: "SET_LOADING" });

    try {
      const movie = await getMovie(randomID);
      const movieDetail = await getFullMovie(randomID);
      dispatch({ type: "GET_MOVIE", payload: { movie, movieDetail } });
    } catch {
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
