import React, { useContext } from "react";
import MovieSearchContext from "../context/MovieSearchContext";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const { movies } = useContext(MovieSearchContext);

  const renderedMovies = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return <div className="movie-list">{renderedMovies}</div>;
};

export default MovieList;
