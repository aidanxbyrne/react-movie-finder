import NotFoundImage from "../../assets/images/not-found.jpg";

function CastItem({ castMember }) {
  // Get Image URL using image path or set default image
  const castPoster = castMember.profile_path
    ? `https://image.tmdb.org/t/p/w154/${castMember.profile_path}`
    : NotFoundImage;

  return (
    <>
      <div className="cast-item">
        <img
          className="cast-profile"
          src={castPoster}
          alt={`${castMember.name} Headshot`}
        />
        <div className="cast-details">
          <strong>{castMember.name}</strong>
          <p>{castMember.character}</p>
        </div>
      </div>
    </>
  );
}

export default CastItem;
