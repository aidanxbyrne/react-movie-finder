import React, { useContext } from "react";
import NotFoundImage from "../assets/images/not-found.jpg";
import MovieContext from "../context/MovieContext";
import { convertedDate, getFullMovie } from "../context/MovieFunctions";

const MovieItem = ({
  movie: { id, title, release_date, vote_average, poster_path },
  movie,
}) => {
  const { dispatch } = useContext(MovieContext);

  const onMovieSelect = async () => {
    dispatch({ type: "OPEN_MODAL" });
    dispatch({ type: "SET_MODAL_LOADING" });
    const movieDetail = await getFullMovie(id);

    dispatch({ type: "GET_MOVIE", payload: { movie, movieDetail } });
  };

  // Get Image URL using image path or set default image
  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w342/${poster_path}`
    : NotFoundImage;

  const rating = vote_average * 10;

  //Return colour value between red and green depending on user rating percentage
  const ratingColor = () => {
    //Colour mapping to percentage taken from: https://stackoverflow.com/a/17267684
    let a = rating / 100,
      b = (120 - 0) * a,
      c = b + 0;
    return "hsl(" + c + ", 100%, 50%)";
  };

  return (
    <>
      <div
        className="card movie-item"
        onClick={() => {
          onMovieSelect();
        }}
      >
        <img className="movie-card-poster" src={moviePoster} alt={title} />
        <div className="card-body movie-item-content">
          <div className="movie-item-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {release_date ? convertedDate(release_date) : ""}
            </p>
          </div>

          {rating > 0 ? (
            <div
              className="movie-item-rating"
              style={{ borderColor: ratingColor() }}
            >
              <strong>{rating}</strong>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MovieItem;
