import React, { useContext } from "react";
import MovieSearchContext from "../context/MovieSearchContext";
import MovieList from "../components/MovieList";
import MovieListInfo from "../components/MovieListInfo";
import SearchBar from "../components/SearchBar";

function Home() {
  const { movies } = useContext(MovieSearchContext);

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
