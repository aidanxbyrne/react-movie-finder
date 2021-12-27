import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import "./styles/App.css";
import Modal from "./components/modal/Modal";
import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import ListPage from "./pages/ListPage";

const App = () => {
  return (
    <React.StrictMode>
      <MovieProvider>
        <Router>
          <Modal />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/top-movies"
              element={
                <ListPage type={"top_rated"} title={"Top Rated Movies"} />
              }
            />
            <Route
              path="/upcoming"
              element={<ListPage type={"upcoming"} title={"Upcoming Movies"} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </MovieProvider>
    </React.StrictMode>
  );
};

export default App;
