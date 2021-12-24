import { useEffect, useContext } from "react";
import MovieList from "../components/MovieList";
import MovieContext from "../context/MovieContext";
import { getMovies } from "../context/MovieFunctions";

function Upcoming() {
  const { dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getMovieData = async () => {
      const movies = await getMovies("upcoming");
      dispatch({ type: "SEARCH_MOVIES", payload: movies });
    };
    getMovieData();
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="page-title">Upcoming Movies</h1>
      <MovieList />
    </div>
  );
}

export default Upcoming;
