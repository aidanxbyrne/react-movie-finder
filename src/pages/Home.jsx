import React, { useContext, useEffect } from "react";
import MovieContext from "../context/MovieContext";
import MovieList from "../components/MovieList";
import MovieListInfo from "../components/MovieListInfo";
import SearchBar from "../components/SearchBar";

function Home() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "CLEAR_MOVIES" });
  }, [dispatch]);

  return (
    <>
      <main className="container">
        <SearchBar />

        {movies.length > 0 && (
          <>
            <MovieListInfo />
            <MovieList />
          </>
        )}
      </main>
    </>
  );
}

export default Home;
