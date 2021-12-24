import { convertedDate } from "../../context/MovieFunctions";
import GenreTag from "./GenreTag";
import ModalInfoItem from "./ModalInfoItem";

function ModalContent({
  movie: {
    title,
    overview,
    release_date,
    runtime,
    director,
    budget,
    genres,
    language,
    trailer,
  },
}) {
  return (
    <div className="modal-card-body card-body p-4">
      <div className="modal-card-content modal-content-head">
        <div className="modal-content-head-left">
          <h2>{title}</h2>
          <p>
            {convertedDate(release_date)} | {runtime} Mins
          </p>
        </div>
        <div className="modal-content-head-right modal-tags">
          {genres.map((genre) => {
            return <GenreTag key={genre.id} genre={genre.name} />;
          })}
        </div>
      </div>
      <div className="modal-card-content">
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
      <div className="modal-card-content modal-content-info">
        <ModalInfoItem heading="Director" text={director} />
        <ModalInfoItem heading="Language" text={language} />
        <ModalInfoItem heading="Budget" text={`$${budget}`} />
      </div>
      <div className="modal-card-content">
        {trailer && (
          <button
            className="btn main-btn"
            id="trailerButton"
            onClick={() => window.open(trailer)}
          >
            Watch Trailer
          </button>
        )}
      </div>
    </div>
  );
}

export default ModalContent;
