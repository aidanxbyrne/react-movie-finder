import { useEffect, useContext } from "react";
import MovieList from "../components/MovieList";
import MovieContext from "../context/MovieContext";
import { getMovies } from "../context/MovieFunctions";

function TopMovies() {
  const { dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getMovieData = async () => {
      const movies = await getMovies("top_rated");
      dispatch({ type: "SEARCH_MOVIES", payload: movies });
    };
    getMovieData();
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="page-title">Top Rated</h1>
      <MovieList />
    </div>
  );
}

export default TopMovies;
