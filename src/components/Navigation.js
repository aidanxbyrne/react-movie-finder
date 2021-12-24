import React, { useContext } from "react";
import { FaFilm } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import { clearMovies } from "../context/MovieFunctions";

const Navigation = () => {
  const { dispatch } = useContext(MovieContext);

  const resetUI = () => {
    dispatch({ type: "CLEAR_MOVIES" });
    clearMovies();
  };

  return (
    <nav className="navbar">
      <div className="nav-content container">
        <div className="nav-left">
          <Link
            to="/"
            className="nav-logo"
            onClick={() => resetUI()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaFilm style={{ marginRight: "10px" }} />
            Movie Finder
          </Link>
        </div>
        <div className="nav-right">
          <div className="nav-links d-flex">
            <NavLink
              to="/"
              className="nav-link"
              activeclassname="active"
              onClick={() => resetUI()}
            >
              Home
            </NavLink>
            <NavLink
              to="/top-movies"
              className="nav-link"
              activeclassname="active"
              onClick={() => resetUI()}
            >
              Top Movies
            </NavLink>
            <NavLink
              to="/upcoming"
              className="nav-link"
              activeclassname="active"
              onClick={() => resetUI()}
            >
              Upcoming
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              activeclassname="active"
              onClick={() => resetUI()}
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
