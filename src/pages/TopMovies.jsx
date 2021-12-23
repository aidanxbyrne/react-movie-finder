import { useEffect, useContext } from "react";
import MovieList from "../components/MovieList";
import MovieSearchContext from "../context/MovieSearchContext";

function TopMovies() {
  const { getMovies } = useContext(MovieSearchContext);
  useEffect(() => {
    getMovies("top_rated");
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Top Rated</h1>
      <MovieList />
    </div>
  );
}

export default TopMovies;
