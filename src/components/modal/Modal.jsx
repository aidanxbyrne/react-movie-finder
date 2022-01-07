import React, { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import ModalCard from "./ModalCard";
import ModalContent from "./ModalContent";
import ModalPoster from "./ModalPoster";
import Spinner from "../Spinner";

const MovieModal = () => {
  const { isModalOpen, movieDetail, modalLoading } = useContext(MovieContext);

  //If Modal is open, prevent body scrolling
  if (isModalOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  //Show spinner until data has finised loading
  const modalContent = modalLoading ? (
    <Spinner />
  ) : (
    <>
      <ModalPoster movie={movieDetail} />
      <ModalContent movie={movieDetail} />
    </>
  );

  return isModalOpen && <ModalCard>{modalContent}</ModalCard>;
};

export default MovieModal;
