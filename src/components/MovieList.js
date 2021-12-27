import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import MovieContext from "../context/MovieContext";
import MovieItem from "./MovieItem";
import Spinner from "./Spinner";

const MovieList = () => {
  const { movies, loading } = useContext(MovieContext);

  const renderedMovies = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return (
    <>
      {!loading ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="movie-list">{renderedMovies}</div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <Spinner color={"white"} className="list-page-spinner" />
      )}
    </>
  );
};

export default MovieList;
