import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";

export default function MovieListInfo() {
  const { searchMessage, dispatch } = useContext(MovieContext);

  return (
    <div className="movie-list-info">
      <h4 className="text-light text-left">{searchMessage}</h4>
      <button
        className="btn btn-light btn-sm border-none"
        type="button"
        onClick={() => dispatch({ type: "CLEAR_MOVIES" })}
      >
        Clear Results
      </button>
    </div>
  );
}
