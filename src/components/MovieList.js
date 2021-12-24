import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  const renderedMovies = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return <div className="movie-list">{renderedMovies}</div>;
};

export default MovieList;
