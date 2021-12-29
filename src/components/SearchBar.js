import React, { useState, useContext } from "react";
import MovieContext from "../context/MovieContext";
import {
  searchMovies,
  getMovie,
  getFullMovie,
  getRandomMovie,
} from "../context/MovieFunctions";

const SearchBar = () => {
  const { dispatch } = useContext(MovieContext);
  const [term, setTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (term) {
      dispatch({ type: "SET_LOADING" });
      const movies = await searchMovies(term);
      dispatch({ type: "SEARCH_MOVIES", payload: movies });

      movies.length > 0
        ? dispatch({
            type: "SET_SEARCH_MESSAGE",
            payload: `Showing results for '${term}'`,
          })
        : setErrorMsg(
            `There are no search results for '${term}'. Please try again.`
          );
    } else {
      setErrorMsg("Please enter a valid search term");
      setTimeout(() => {
        setErrorMsg("");
      }, 5000);
    }
  };

  async function openRandomMovie() {
    const randomID = await getRandomMovie();

    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "OPEN_MODAL" });

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

        <div className="search-component-container">
          {errorMsg && <div className="searchError">{errorMsg}</div>}

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
        </div>

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
