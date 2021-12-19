import React, { useContext } from "react";
import MovieSearchContext from "../context/MovieSearchContext";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const { movies, searchMessage } = useContext(MovieSearchContext);

  const renderedMovies = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return (
    <div className="container">
      <h3 className="text-light mb-4 text-center">{searchMessage}</h3>
      <div className="movie-list">{renderedMovies}</div>
    </div>
  );
};

export default MovieList;
