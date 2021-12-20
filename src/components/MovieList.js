import React, { useContext } from "react";
import MovieSearchContext from "../context/MovieSearchContext";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const { movies, searchMessage, clearMovies } = useContext(MovieSearchContext);

  const renderedMovies = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  if (movies.length > 0) {
    return (
      <div className="container">
        <div className="d-flex mb-3 justify-content-between align-items-center">
          <h4 className="text-light text-left">{searchMessage}</h4>
          <button
            className="btn btn-light btn-sm border-none"
            type="button"
            onClick={() => clearMovies()}
          >
            Clear Results
          </button>
        </div>
        <div className="movie-list">{renderedMovies}</div>
      </div>
    );
  } else {
    return "";
  }
};

export default MovieList;
