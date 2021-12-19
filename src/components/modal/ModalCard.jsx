import React, { useContext } from "react";
import MovieContext from "../../context/MovieContext";

function ModalCard({ children }) {
  const { closeModal } = useContext(MovieContext);

  return (
    <div className="modal-main">
      <div className="modal-card card ">
        <div className="modal-close-btn" onClick={() => closeModal()}>
          X
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalCard;
