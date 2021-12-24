import { createContext, useReducer } from "react";
// import MovieReducer from "./MovieReducer";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const initialState = {
    isModalOpen: false,
    movie: {},
    movieDetail: {},
    movies: [],
    searchMessage: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const MovieReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case "GET_MOVIE":
      return {
        ...state,
        movie: action.payload.movie,
        movieDetail: action.payload.movieDetail,
        loading: false,
      };
    case "CLEAR_MOVIES":
      return {
        ...state,
        movies: [],
      };
    case "SET_SEARCH_MESSAGE":
      return {
        ...state,
        searchMessage: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default MovieContext;
