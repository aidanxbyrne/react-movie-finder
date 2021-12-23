import React, { useContext } from "react";
import MovieSearchContext from "../context/MovieSearchContext";

export default function MovieListInfo() {
  const { searchMessage, clearMovies } = useContext(MovieSearchContext);
  return (
    <div className="movie-list-info">
      <h4 className="text-light text-left">{searchMessage}</h4>
      <button
        className="btn btn-light btn-sm border-none"
        type="button"
        onClick={() => clearMovies()}
      >
        Clear Results
      </button>
    </div>
  );
}
