import { convertedDate } from "../../context/MovieFunctions";
import CastList from "./CastList";
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
    cast,
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
          <div className=" modal-tags">
            {genres.map((genre) => (
              <GenreTag key={genre.id} genre={genre.name} />
            ))}
          </div>
        </div>
        <div className="modal-content-head-right">Rating</div>
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
      {cast.length > 0 && (
        <div className="modal-card-content">
          <h3>Main Cast</h3>
          <CastList />
        </div>
      )}
    </div>
  );
}

export default ModalContent;
