import { createContext, useState } from "react";
import theMovieDB from "../api/tmdb";

const MovieSearchContext = createContext();

export const MovieSearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchMessage, setSearchMessage] = useState();

  const search = async (term) => {
    if (term) {
      const res = await theMovieDB.get("/search/movie", {
        params: {
          query: term,
        },
      });
      const data = res.data.results;
      setMovies(data);

      //Set message depending on API Response
      const message =
        data.length > 0
          ? `Showing results for '${term}'`
          : `There are no search results for '${term}'. Please try again.`;
      setSearchMessage(message);
    } else {
      setSearchMessage("Please enter a valid search term");
    }
  };

  const getMovies = async (type) => {
    const res = await theMovieDB.get(`/movie/${type}`);
    const data = res.data.results;
    setMovies(data);
  };

  const clearMovies = () => {
    setMovies([]);
    if (document.querySelector(".search-component")) {
      document.querySelector(".search-component").style.height = "90vh";
    }
  };

  return (
    <MovieSearchContext.Provider
      value={{ movies, searchMessage, search, clearMovies, getMovies }}
    >
      {children}
    </MovieSearchContext.Provider>
  );
};

export default MovieSearchContext;
