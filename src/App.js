import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./styles/App.css";
import Modal from "./components/modal/Modal";
import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";
import TopMovies from "./pages/TopMovies";
import About from "./pages/About";
import Upcoming from "./pages/Upcoming";

const App = () => {
  return (
    <React.StrictMode>
      <MovieProvider>
        <Router>
          <Modal />
          <Navigation />
          <main className="content-body d-flex flex-column align-items-center justify-content-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-movies" element={<TopMovies />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </Router>
      </MovieProvider>
    </React.StrictMode>
  );
};

export default App;
