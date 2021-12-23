import { useEffect, useContext } from "react";
import MovieList from "../components/MovieList";
import MovieSearchContext from "../context/MovieSearchContext";

function Upcoming() {
  const { getMovies } = useContext(MovieSearchContext);
  useEffect(() => {
    getMovies("upcoming");
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Upcoming Movies</h1>
      <MovieList />
    </div>
  );
}

export default Upcoming;
