import axios from "axios";
const tmdbKey = process.env.REACT_APP_TMDB_KEY;
const tmdbUrl = "https://api.themoviedb.org/3";

const tmdb = axios.create({
  baseURL: tmdbUrl,
  params: { api_key: tmdbKey },
});

//Fetch search results for input
export const searchMovies = async (term) => {
  const res = await tmdb.get("/search/movie", {
    params: {
      query: term,
    },
  });
  return res.data.results;
};

//Get list of movies of type top-rated or upcoming
export const getMovies = async (type) => {
  const res = await tmdb.get(`/movie/${type}`);
  return res.data.results;
};

//Get movie by ID
export const getMovie = async (id) => {
  const res = await tmdb.get(`/movie/${id}`);
  return res.data.results;
};

//Get full details of selected movie
export const getFullMovie = async (id) => {
  const [movieRes, creditRes, videoRes] = await Promise.all([
    tmdb.get(`/movie/${id}`),
    tmdb.get(`/movie/${id}/credits`),
    tmdb.get(`/movie/${id}/videos`),
  ]);

  const [movie, credit, cast, video] = [
    movieRes.data,
    creditRes.data.crew,
    creditRes.data.cast,
    videoRes.data.results,
  ];

  const {
    adult,
    title,
    overview,
    release_date,
    runtime,
    budget,
    genres,
    poster_path,
    spoken_languages,
    original_language,
  } = movie;

  const [director, language, trailer] = [
    getDirector(credit),
    getLanguage(spoken_languages, original_language),
    getTrailer(video),
  ];

  return {
    id,
    adult,
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
    cast,
  };
};

//Get Director from credits response - Check each member of the crew to see if they're the director
function getDirector(crew) {
  let _director = "Unknown";

  if (crew.length > 0) {
    crew.forEach((crewMember) => {
      if (crewMember.job === "Director") {
        _director = crewMember.name;
      }
    });
  }

  return _director;
}

//If movie has languages, check each of those languages. Then check if the iso_639_1 code of those languages matches the code of the movie original lanagues. If yes, return the English name of that language
const getLanguage = (languages, original_language) => {
  let _language = "Unknown";
  if (languages.length > 0) {
    languages.forEach((language) => {
      if (language.iso_639_1 === original_language) {
        _language = language.english_name;
      }
    });
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

//Get ID of the latest movie and generate randomID between 1 and latest ID
export const getRandomMovie = async () => {
  const res = await tmdb.get("movie/latest");
  const randomID = Math.floor(Math.random() * `${res.data.id}`) + 1;
  return randomID;
};

export const clearMovies = () => {
  return;
};

// Convert date format from YYYY-MM-YYYY to DD/MM/YYYY
export const convertedDate = (date) => {
  if (date === null || date === "") {
    return "";
  } else {
    let releaseDay = date.substring(8, 10);
    let releaseMonth = date.substring(5, 7);
    let releaseYear = date.substring(0, 4);
    return `${releaseDay}/${releaseMonth}/${releaseYear}`;
  }
};
