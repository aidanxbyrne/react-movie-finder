import NotFoundImage from "../../assets/images/not-found.jpg";

function ModalPoster({ poster }) {
  return (
    <>
      <div className="modal-card-image">
        <img
          src={
            { poster }
              ? `https://image.tmdb.org/t/p/w342/${poster}`
              : NotFoundImage
          }
          className="img h-100 rounded-start"
          alt="..."
          style={{ width: "425px" }}
        />
      </div>
    </>
  );
}

export default ModalPoster;
