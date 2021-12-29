import NotFoundImage from "../../assets/images/not-found.jpg";

function ModalPoster({ movie: { poster_path, title } }) {
  return (
    <>
      <div className="modal-card-image">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342/${poster_path}`
              : NotFoundImage
          }
          className="modal-card-poster"
          alt={`${title} Poster`}
        />
      </div>
    </>
  );
}

export default ModalPoster;
