import React from "react";
import Navigation from "./components/Navigation";
import MovieList from "./components/MovieList";
import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import Modal from "./components/modal/Modal";
import { MovieProvider } from "./context/MovieContext";
import { MovieSearchProvider } from "./context/MovieSearchContext";

const App = () => {
  return (
    <React.StrictMode>
      <MovieProvider>
        <Modal />
        <Navigation />
        <div className="content-body d-flex flex-column align-items-center justify-content-center">
          <MovieSearchProvider>
            <SearchBar />
            <MovieList />
          </MovieSearchProvider>
        </div>
      </MovieProvider>
    </React.StrictMode>
  );
};

export default App;
