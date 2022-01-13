import { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import CastItem from "./CastItem";

function CastList() {
  const { movieDetail } = useContext(MovieContext);

  const cast = movieDetail.cast;
  const renderedCast = cast.map((castMember) => {
    return <CastItem key={castMember.id} castMember={castMember} />;
  });

  return <div className="cast-list">{renderedCast}</div>;
}

export default CastList;
