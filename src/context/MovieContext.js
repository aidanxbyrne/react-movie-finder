import { createContext, useState } from "react";
import theMovieDB from "../api/tmdb";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieDetail, setSelectedMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);

  // Convert date format from YYYY-MM-YYYY to DD/MM/YYYY
  const convertedDate = (date) => {
    if (date === null || date === "") {
      return "";
    } else {
      let releaseDay = date.substring(8, 10);
      let releaseMonth = date.substring(5, 7);
      let releaseYear = date.substring(0, 4);
      return `${releaseDay}/${releaseMonth}/${releaseYear}`;
    }
  };

  const onMovieSelect = (movie) => {
    openModal();
    setSelectedMovie(movie);
    getSelectedMovieDetail(movie.id);
  };

  //Get Detiled Movie Information
  const getSelectedMovieDetail = async (id) => {
    if (id) {
      const [movieResponse, creditResponse, videoResponse] = await Promise.all([
        theMovieDB.get(`/movie/${id}`),
        theMovieDB.get(`/movie/${id}/credits`),
        theMovieDB.get(`/movie/${id}/videos`),
      ]);

      const [movie, credit, video] = [
        movieResponse.data,
        creditResponse.data.crew,
        videoResponse.data.results,
      ];

      const {
        title,
        overview,
        release_date,
        runtime,
        budget,
        genres,
        poster_path,
      } = movie;

      const director = getDirector(await credit),
        language = getLanguage(await movie),
        trailer = getTrailer(await video);

      setSelectedMovieDetail({
        title,
        overview,
        release_date,
        runtime,
        director,
        budget,
        genres,
        poster_path,
        language,
        trailer,
      });

      setLoading(false);
    }
  };

  //Get Director from credits response - Check each member of the crew to see if they're the director
  function getDirector(crew) {
    let _director;

    if (crew.length > 0) {
      crew.forEach((crewMember) => {
        if (crewMember.job === "Director") {
          _director = crewMember.name;
        }
      });
    } else {
      _director = "Unknown";
    }

    return _director;
  }

  //Get Language
  const getLanguage = (movie) => {
    let _language;

    //If movie has languages, check each of those languages. Then check if the iso_639_1 code of those languages matches the code of the movie original lanagues. If yes, return the English name of that language
    if (movie.spoken_languages.length > 0) {
      movie.spoken_languages.forEach((language) => {
        if (language.iso_639_1 === movie.original_language) {
          _language = language.english_name;
        }
      });
    } else {
      _language = "Unknown";
    }

    return _language;
  };

  //Get Trailer video for movie
  const getTrailer = (video) => {
    const _trailer =
      video.length > 0 && video[0].site === "YouTube"
        ? `https://www.youtube.com/watch?v=${video[0].key}`
        : video.length > 0 && video[0].site === "Vimeo"
        ? `https://vimeo.com/${video[0].key}`
        : null;

    return _trailer;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setLoading(true);
    setIsModalOpen(false);
    setSelectedMovieDetail(null);
    setSelectedMovie(null);
  };

  return (
    <MovieContext.Provider
      value={{
        isModalOpen,
        closeModal,
        openModal,
        selectedMovie,
        onMovieSelect,
        convertedDate,
        selectedMovieDetail,
        getSelectedMovieDetail,
        loading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
