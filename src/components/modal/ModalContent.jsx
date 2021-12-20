import GenreTag from "./GenreTag";
import ModalInfoItem from "./ModalInfoItem";

function ModalContent({ movie, convertedDate }) {
  return (
    <div className="modal-card-body card-body p-4">
      <div className="modal-card-content modal-content-head">
        <div className="modal-content-head-left">
          <h2>{movie.title}</h2>
          <p>{convertedDate(movie.date)}</p>
        </div>
        <div className="modal-content-head-right modal-tags">
          {movie.genres.map((genre) => {
            return <GenreTag key={genre.id} genre={genre.name} />;
          })}
        </div>
      </div>
      <div className="modal-card-content">
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
      <div className="modal-card-content modal-content-info">
        <ModalInfoItem heading="Director" text={movie.director} />
        <ModalInfoItem heading="Language" text={movie.language} />
        <ModalInfoItem heading="Budget" text={`$${movie.budget}`} />
      </div>
      <div className="modal-card-content">
        {movie.trailer && (
          <button
            className="main-btn"
            id="trailerButton"
            onClick={() => window.open(movie.trailer)}
          >
            Watch Trailer
          </button>
        )}
      </div>
    </div>
  );
}

export default ModalContent;
