import React, { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import ModalCard from "./ModalCard";
import ModalContent from "./ModalContent";
import ModalPoster from "./ModalPoster";
import Spinner from "../Spinner";

const MovieModal = () => {
  const { isModalOpen, selectedMovieDetail, loading, convertedDate } =
    useContext(MovieContext);

  //Show spinner until data has finised loading
  const modalContent = loading ? (
    <Spinner />
  ) : (
    <>
      <ModalPoster poster={selectedMovieDetail.poster_path} />
      <ModalContent movie={selectedMovieDetail} convertedDate={convertedDate} />
    </>
  );

  return isModalOpen && <ModalCard>{modalContent}</ModalCard>;
};

export default MovieModal;
