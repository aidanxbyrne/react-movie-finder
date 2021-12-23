import React, { useContext } from "react";
import { FaFilm } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import MovieSearchContext from "../context/MovieSearchContext";

const Navigation = () => {
  const clearMovies = useContext(MovieSearchContext);

  return (
    <nav className="navbar">
      <div className="nav-content container">
        <div className="nav-left">
          <Link
            to="/"
            className="nav-logo"
            onClick={() => clearMovies()}
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
              onClick={() => clearMovies()}
            >
              Home
            </NavLink>
            <NavLink
              to="/top-movies"
              className="nav-link"
              activeclassname="active"
              onClick={() => clearMovies()}
            >
              Top Movies
            </NavLink>
            <NavLink
              to="/upcoming"
              className="nav-link"
              activeclassname="active"
              onClick={() => clearMovies()}
            >
              Upcoming
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              activeclassname="active"
              onClick={() => clearMovies()}
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
