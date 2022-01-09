import React, { useContext } from "react";
import MovieContext from "../../context/MovieContext";

function ModalCard({ children }) {
  const { dispatch, isModalOpen } = useContext(MovieContext);

  //Close modal onClick outside
  const outsideClick = (e) => {
    if (isModalOpen && e.target.classList.contains("modal-main")) {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };

  return (
    <div
      className="modal-main"
      onClick={(e) => {
        outsideClick(e);
      }}
    >
      <div className="modal-card card ">
        <div
          className="modal-close-btn"
          onClick={() => dispatch({ type: "CLOSE_MODAL" })}
        >
          X
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalCard;
