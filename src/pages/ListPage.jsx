import { useEffect, useContext } from "react";
import MovieList from "../components/MovieList";
import MovieContext from "../context/MovieContext";
import { getMovies } from "../context/MovieFunctions";

function ListPage({ type, title }) {
  const { dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "CLEAR_MOVIES" });
    dispatch({ type: "SET_LOADING" });
    const getMovieData = async () => {
      const movies = await getMovies(`${type}`);
      dispatch({ type: "SEARCH_MOVIES", payload: movies });
    };
    getMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <main className="list-page">
      <div className="container">
        <h1 className="page-title">{title}</h1>
        <MovieList />
      </div>
    </main>
  );
}

export default ListPage;
