import React, { useContext } from "react";
import NotFoundImage from "../assets/images/not-found.jpg";
import MovieContext from "../context/MovieContext";
import GenreTag from "./modal/GenreTag";
import ModalCard from "./modal/ModalCard";
import ModalInfoItem from "./modal/ModalInfoItem";
import Spinner from "./Spinner";

const MovieModal = () => {
  const { isModalOpen, selectedMovieDetail, loading, convertedDate } =
    useContext(MovieContext);

  const modalContent = loading ? (
    <Spinner />
  ) : (
    <>
      <div className="modal-card-image">
        <img
          src={
            selectedMovieDetail.poster
              ? `https://image.tmdb.org/t/p/w342/${selectedMovieDetail.poster}`
              : NotFoundImage
          }
          className="img h-100 rounded-start"
          alt="..."
          style={{ width: "425px" }}
        />
      </div>
      <div className="modal-card-body card-body p-4">
        <div className="modal-card-content modal-content-head">
          <div className="modal-content-head-left">
            <h2>{selectedMovieDetail.title}</h2>
            <p>{convertedDate(selectedMovieDetail.date)}</p>
          </div>
          <div className="modal-content-head-right modal-tags">
            {selectedMovieDetail.genres.map((genre) => {
              return <GenreTag key={genre.id} genre={genre.name} />;
            })}
          </div>
        </div>
        <div className="modal-card-content">
          <h3>Overview</h3>
          <p>{selectedMovieDetail.overview}</p>
        </div>
        <div className="modal-card-content modal-content-info">
          <ModalInfoItem
            heading="Director"
            text={selectedMovieDetail.director}
          />
          <ModalInfoItem
            heading="Language"
            text={selectedMovieDetail.language}
          />
          <ModalInfoItem
            heading="Budget"
            text={`$${selectedMovieDetail.budget}`}
          />
        </div>
        <div className="modal-card-content">
          {selectedMovieDetail.trailer && (
            <button
              className="main-btn"
              id="trailerButton"
              onClick={() => window.open(selectedMovieDetail.trailer)}
            >
              Watch Trailer
            </button>
          )}
        </div>
      </div>
    </>
  );

  return isModalOpen && <ModalCard>{modalContent}</ModalCard>;
};

export default MovieModal;
