import { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import CastItem from "./CastItem";

function CastList() {
  const { movieDetail } = useContext(MovieContext);

  const cast = movieDetail.cast;
  const renderedCast = cast.slice(0, 9).map((castMember) => {
    return <CastItem key={castMember.id} castMember={castMember} />;
  });

  return (
    <div className="cast-section">
      <div className="cast-list">{renderedCast}</div>
      <a
        href={`https://www.themoviedb.org/movie/${movieDetail.id}-${movieDetail.name}/cast`}
        target="_blank"
      >
        <button className="btn btn-small">View Full Cast</button>
      </a>
    </div>
  );
}

export default CastList;
