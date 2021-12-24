import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";
import MovieList from "../components/MovieList";
import MovieListInfo from "../components/MovieListInfo";
import SearchBar from "../components/SearchBar";

function Home() {
  const { movies } = useContext(MovieContext);

  return (
    <div className="container">
      <SearchBar />
      {movies.length > 0 && (
        <>
          <MovieListInfo />
          <MovieList />
        </>
      )}
    </div>
  );
}

export default Home;
